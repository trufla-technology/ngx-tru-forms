import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <p>{{placeholder()}}</p>
    <img src="{{control.value}}" class="img-thumbnail" />
  `
})
export class PhotoViewComponent extends CommonComponent {}

