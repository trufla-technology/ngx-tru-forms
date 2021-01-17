import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'jf-tru-ui-photo',
  templateUrl: './tru-ui-photo.component.html',
  styleUrls: ['./tru-ui-photo.component.css']
})
export class TruUiPhotoComponent extends CommonComponent {
  file: any ;
  selectFile = false;
  photoData: string;
  resetUpload() {
    this.file = {};
    this.selectFile = false;
    this.fileSize = null;
    this.control.reset();

  }
  async handleDrop(files) {
    if (this.schema.maxSize && +this.schema.maxSize < +files[0].size/1024/1024) {
      this.fileSize = null;
      this.control.setErrors({maxSize: true});
      this.control.markAsTouched();
     } else { 
      this.file = files[0];
      this.fileSize = null;
    this.selectFile = true;
    const file = await this.toBase64(this.file);
    this.photoData = file.toString();
    this.control.setValue(this.photoData);
     }
  }
  shortenSize(data) {
    return data.toString().substring(0, 5);
  }

  async dragAndDrop(files) {
    if (this.schema.maxSize && +this.schema.maxSize < +files.target.files[0].size/1024/1024) {
      this.fileSize = null;
     this.control.setErrors({maxSize: true});
     this.control.markAsTouched();
    } else { 
      this.file = files.target.files[0];
      this.fileSize = null;
    this.selectFile = true;
    const file = await this.toBase64(this.file);
    this.photoData = file.toString();
    this.control.setValue(this.photoData);
  }
  }

  toBase64(file): Promise<any> {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  }
}
