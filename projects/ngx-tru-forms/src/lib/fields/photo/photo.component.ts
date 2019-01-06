import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label [attr.class]="schema.key" [ngClass]="{required: isRequired()}">
      <span [innerHTML]="title()"></span><sup *ngIf="isRequired()">*</sup>
    </label>
    <div *ngIf="previewSrcExists()" class="photo-preview">
      <img [attr.src]="photoData" />
      <span href="#" style="cursor: pointer;" (click)="clearPhoto()">
        <i class="la la-close"></i>
      </span>
    </div>
    <div>
      <input
        *ngIf="!previewSrcExists()"
        type="file"
        (change)="onChange($event)"
      />
      <input type="hidden" [name]="schema.key" [formControl]="control" />
    </div>
  `
})
export class PhotoComponent extends CommonComponent {
  public photoData: string;

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

