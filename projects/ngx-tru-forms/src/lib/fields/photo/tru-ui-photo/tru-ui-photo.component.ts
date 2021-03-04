import { Component } from '@angular/core';
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
  busy = false;

  // For accessible file/image upload
  onUploadLabelClick(evt): void {
    var keyCode = evt.which || evt.keyCode;
    if (keyCode === 13 || keyCode === 32) {
        document.getElementById(this.schema.key).click();
        evt.preventDefault();
    }
  }

  resetUpload() {
    this.file = {};
    this.selectFile = false;
    this.fileSize = null;
    this.photoData = null;
    this.busy = false;
    this.control.reset();
  }

  async handleDrop(files) {
   this.processFile(files);
  }

  shortenSize(data) {
    return data.toString().substring(0, 5);
  }

  async dragAndDrop(files) {
    this.processFile(files.target.files);
  }

  toBase64(file): Promise<any> {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  }

 async processFile(files) {
    const name = files[0].name;
    const file = await this.toBase64(files[0]);
    const lastDot = name.lastIndexOf('.');
    const ext = name.substring(lastDot + 1);
    if ((this.schema.maxSize && +this.schema.maxSize < +files[0].size / 1024 / 1024) ||
        (this.schema.imageFormat && [...this.schema.imageFormat].indexOf(ext.toLowerCase()) === -1 )) {
      this.fileSize = null;
      this.busy = false;
      (this.schema.maxSize && +this.schema.maxSize < +files[0].size / 1024 / 1024) ? this.control.setErrors({maxSize: true}) : this.control.setErrors({invalidFormat: true});
      this.control.markAsTouched();
      return;
     } else {
       this.busy = true;
      this.file = files[0];
      this.fileSize = null;
      this.selectFile = true;
      if ( ['png', 'jpeg', 'jpg', 'jpeg', 'gif'].indexOf(ext.toLowerCase()) !== -1 ) {
        this.compressFile( file.toString(), +files[0].size / 1024 / 1024).then((res) => {
        this.getImageFromUrl(res);
        this.photoData = res;
        this.busy = false;
        this.control.setValue(this.photoData);
    }, (err) => {
      this.fileSize = null;
      this.busy = false;
      this.control.setErrors({invalid: true});
      this.control.markAsTouched();
      this.busy = false;
    }).catch((err) => {
      this.fileSize = null;
      this.busy = false;
      this.control.setErrors({invalid: true});
      this.control.markAsTouched();
      this.busy = false;
    });
    } else {
      this.photoData = file.toString();
      this.getImageFromUrl(file.toString());
      this.busy = false;
      this.control.setValue(this.photoData);
    }
   }
  }
}
