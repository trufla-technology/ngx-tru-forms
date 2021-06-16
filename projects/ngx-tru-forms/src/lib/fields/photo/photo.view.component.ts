import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ViewFileComponent } from '../view-file/view-file.component';
@Component({
  template: `
    <p tabindex="0">{{title()}}</p>
    <button type="button" class='img-thumbnail'
    tabindex="0" [attr.aria-label]="'View '+title()" (click)='openFile()' *ngIf='!isPdf() && control.value'>
    <img

    [alt]="'View '+title()"
    src='{{control.value}}'
    class='img-thumbnail'
    style='width: 100px !important;cursor:pointer'  />
    </button>
    <button *ngIf='isPdf() && control.value'
    class='img-thumbnail primary-bg' tabindex="0"
    [attr.aria-label]="'View '+title()"
    (click)='openFile()' type="button"
    style='width: 100px !important;
    height:100px !important;
    cursor:pointer;
    border: none;
    padding: 0;
    border-radius: 6px;
    background-color: #d8d8d8;
    display: flex;justify-content: center;align-items: center;'>
    <div [innerHTML]="makeTrustedHtml(pdfIcon)" class="svg-fill-primary" style="
    width: 60px;
    background-color: #fff;
    height: 60px;
    display: flex;
    border-radius: 100%;
    justify-content: center;
    align-items: center;"> </div>
  </button>
  `
})
export class PhotoViewComponent extends CommonComponent {
  bsModalRef: BsModalRef;
  pdfIcon = `<?xml version="1.0" encoding="UTF-8"?>
  <svg role="img" aria-labeledby="open-pdf-file" class="svg-fill-primary" width="30px" height="28px"
  viewBox="0 0 20 19" version="1.1"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>PDF File</title>
      <desc>Open PDF File</desc>
      <g id="Temporarily" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M18.402585,4.87879752
          L15.1125569,4.87879752 L15.1125569,0.930748323
          C15.1125569,0.567327311 14.8179568,0.272727273
          14.4545358,0.272727273 L1.29438469,0.272727273
          C0.930963674,0.272727273 0.636363636,0.567327311
          0.636363636,0.930748323 L0.636363636,16.064924
          C0.636363636,17.5185695 1.81476379,18.6969697
          3.26840928,18.6969697 L16.4285604,18.6969697 C17.8822059,18.6969697
           19.0606061,17.5185695 19.0606061,16.064924 L19.0606061,5.53678001 C19.0606061,5.17339756
           18.766006,4.87879752 18.402585,4.87879752 Z M6.21213187,4.15151515 L10.5757469,4.15151515
           C10.9774211,4.15151515 11.3030303,4.36858478 11.3030303,4.63636364 C11.3030303,4.9041425
           10.9774211,5.12121212 10.5757469,5.12121212 L6.21213187,5.12121212 C5.81045769,5.12121212
           5.48484848,4.9041425 5.48484848,4.63636364 C5.48484848,4.36858478 5.8105003,4.15151515
           6.21213187,4.15151515 Z M12.549772,15.7878788 L4.23810683,15.7878788 C3.8555592,15.7878788
           3.54545455,15.5708092 3.54545455,15.3030303 C3.54545455,15.0352514 3.8555592,14.8181818
           4.23810683,14.8181818 L12.549772,14.8181818 C12.9323196,14.8181818 13.2424242,
           15.0352514 13.2424242,15.3030303 C13.2424242,15.5708092 12.9323196,15.7878788
           12.549772,15.7878788 Z M12.549772,12.8787879 L4.23810683,12.8787879
           C3.8555592,12.8787879 3.54545455,12.6617183 3.54545455,12.3939394 C3.54545455,12.1261605
           3.8555592,11.9090909 4.23810683,11.9090909 L12.549772,11.9090909 C12.9323196,11.9090909
           13.2424242,12.1261605 13.2424242,12.3939394 C13.2424242,12.6617183 12.9323196,12.8787879
           12.549772,12.8787879 Z M12.549772,9.96969697 L4.23810683,9.96969697 C3.8555592,9.96969697
           3.54545455,9.75262735 3.54545455,9.48484848 C3.54545455,9.21706962 3.8555592,9 4.23810683,9
           L12.549772,9 C12.9323196,9 13.2424242,9.21706962 13.2424242,9.48484848 C13.2424242,9.75262735
           12.9323196,9.96969697 12.549772,9.96969697 Z
           M12.549772,8.03030303 L4.23810683,8.03030303 C3.8555592,8.03030303
           3.54545455,7.81323341 3.54545455,7.54545455 C3.54545455,7.27767568
           3.8555592,7.06060606 4.23810683,7.06060606 L12.549772,7.06060606
           C12.9323196,7.06060606 13.2424242,7.27767568 13.2424242,7.54545455
           C13.2424242,7.81323341 12.9323196,8.03030303 12.549772,8.03030303 Z
           M18.0908665,15.5026846 C18.0908665,16.1957369 17.4396481,16.7575758
           16.6363423,16.7575758 C15.8330366,16.7575758 15.1818182,16.1957369
           15.1818182,15.5026846 L15.1818182,6.09090909 L18.0909091,6.09090909
           L18.0909091,15.5026846 L18.0908665,15.5026846 Z" id="pdf-file-icon-grey" fill="#8C8C8C" fill-rule="nonzero"></path>
      </g>
  </svg>`;

  openFile() {
    this.modalService.config.class = 'modal-lg modal-dialog-centered';
    const initialState = {
      file: this.control.value,
      title: `${this.title()}`,
      isPdf: this.isPdf(),
      language: this.language || 'en'
        };
    this.bsModalRef = this.modalService.show(ViewFileComponent, {initialState});
}
}

