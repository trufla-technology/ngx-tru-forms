import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <div *ngIf="previewSrcExists(); else addImage" class="photo-preview">
      <button
        class="photo-add"
        mat-button
        color="primary"
        [style.background-image]="makeTrustedImage(photoData)"
        [style.background-size]="'cover'"
        [style.background-repeat]="'no-repeat'"
        (click)="$event.preventDefault(); fileInput.click();"
      >
        <mat-icon>add_a_photo</mat-icon>
      </button>
      <button
        class="photo-remove"
        mat-mini-fab
        color="warn"
        (click)="clearPhoto()"
      >
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <ng-template #addImage>
      <button
        class="photo-add"
        mat-button
        color="primary"
        (click)="$event.preventDefault(); fileInput.click();"
      >
        <mat-icon>add_a_photo</mat-icon>
      </button>
    </ng-template>
    <input #fileInput type="file" [name]="schema.key" (change)="onChange($event)" style="display:none;"/>
    <input type="hidden" [name]="schema.key" [formControl]="control" />
  `
})
export class PhotoMaterialComponent extends CommonComponent {
  photoData: string;

  onChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.processFile(reader.result, file.type)
        .then((data) => {
          this.photoData = data.toString();
          this.control.setValue(this.photoData);
        });
    };

    reader.onerror = function () {
      console.log('There was an error reading the file!');
    };

    if (typeof(file) !== 'undefined') {
      reader.readAsDataURL(file);
    }
  }

  previewSrcExists() {
    return typeof (this.photoData) === 'string';
  }

  clearPhoto() {
    this.photoData = null;
    this.control.reset();
  }

  processFile(dataURL, fileType) {
    const maxWidth = 800;
    const maxHeight = 800;

    const image = new Image();
    image.src = dataURL;

    return new Promise((resolve, reject) => {
      image.onload = () => {
        const width = image.width;
        const height = image.height;
        const shouldResize = (width > maxWidth) || (height > maxHeight);

        if (!shouldResize) {
          resolve(dataURL);
        }

        let newWidth;
        let newHeight;

        if (width > height) {
          newHeight = height * (maxWidth / width);
          newWidth = maxWidth;
        } else {
          newWidth = width * (maxHeight / height);
          newHeight = maxHeight;
        }

        const canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, newWidth, newHeight);

        resolve(canvas.toDataURL(fileType));
      };

      image.onerror = (err) => reject(err);
    });
  }
}

