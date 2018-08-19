import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p>{{title()}}</p>
    <img src="{{control.value}}" class="img-thumbnail" />
  `
})
export class PhotoViewComponent extends CommonComponent {}

