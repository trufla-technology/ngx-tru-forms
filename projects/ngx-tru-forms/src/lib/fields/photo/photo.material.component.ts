import {Component, OnInit} from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      <span [innerHTML]="title(true)"></span>
    </label>
    <div *ngIf="previewSrcExists(); else addImage" class="photo-preview">
      <a
        class="photo-add"
        mat-button
        color="primary"
        [style.background-image]="makeTrustedImage(photoData)"
        [style.background-size]="'cover'"
        [style.background-repeat]="'no-repeat'"
        (click)="$event.preventDefault(); fileInput.click()"
        [disabled]="disabled"
      >
        <mat-icon>add_a_photo</mat-icon>
      </a>
      <a
        class="photo-remove"
        mat-mini-fab
        color="warn"
        (click)="clearPhoto()"
      >
        <mat-icon>close</mat-icon>
      </a>
    </div>
    <ng-template #addImage>
      <a
        class="photo-add"
        mat-button
        color="primary"
        (click)="$event.preventDefault(); fileInput.click(fileInput.value = null);  "
      >
        <mat-icon>add_a_photo</mat-icon>
      </a>
    </ng-template>
    <input #fileInput type="file" accept="image/*" [name]="schema.key" (change)="onChange($event)" style="display:none;"/>
    <input type="hidden" [name]="schema.key" [formControl]="control"/>
    <div class="mat-form-field-subscript-wrapper" *ngIf="error" style="position: relative;">
      <mat-error class="mat-error">Please upload a valid photo format (JPG, PNG)</mat-error>
    </div>
    <div>
      <jf-error [control]="control"></jf-error>
    </div>
  `
})
export class PhotoMaterialComponent extends CommonComponent implements OnInit {
  photoData: string;
  error = false;

  ngOnInit() {
    if (this.control.data) {
      this.photoData = this.control.data;
    }
  }

  onChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.processFile(reader.result, file.type)
        .then((data) => {
          this.error = false;
          this.photoData = data.toString();
          this.control.setValue(this.photoData);
        })
        .catch((err) => {
          this.error = true;
        });
    };

    reader.onerror = () => {
      this.error = true;
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
    const maxWidth = 1024;
    const maxHeight = 1024;

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

