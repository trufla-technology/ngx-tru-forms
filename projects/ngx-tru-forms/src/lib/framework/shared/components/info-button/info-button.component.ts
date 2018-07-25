import {Component, Input} from '@angular/core';

@Component({
  selector: 'jf-info-button',
  template: `
    <a
      [attr.href]="'javascript:void(0)'"
      *ngIf="title"
      [attr.class]="'btn btn-link info'" [attr.title]="title">Info</a>
  `
})
export class InfoButtonComponent {
  @Input() title;
}
