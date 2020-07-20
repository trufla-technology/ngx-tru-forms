import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../common/common.component';

@Component({
  selector: 'jf-tru-ui-photo',
  templateUrl: './tru-ui-photo.component.html',
  styleUrls: ['./tru-ui-photo.component.css']
})
export class TruUiPhotoComponent extends CommonComponent {
  file: any = {};
  selectFile = false;
  photoData: string;
  fieldId: string = Math.random().toString();

  resetUpload() {
    this.file = {};
    this.selectFile = false;
    this.control.reset();

  }
 async handleDrop(files) { 
    this.file = files[0];
    this.selectFile = true;
    const file = await this.toBase64(this.file);
    this.photoData = file.toString();
    console.log(this.schema)
    this.control.setValue(this.photoData);

  }
  shortenSize(data) {
    return data.toString().substring(0, 4);
  }
 async dragAndDrop(files) {
    this.file = files.target.files[0];
    this.selectFile = true;
    const file = await this.toBase64(this.file);
    this.photoData = file.toString();
    this.control.setValue(this.photoData);


  }
  toBase64(file) {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  }
}
