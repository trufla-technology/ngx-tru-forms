import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jf-info-button',
  template: `
    <a
      href="javascript:void(0)"
      *ngIf="title"
      class="btn btn-link info" [attr.title]="title">Info</a>
  `
})
export class InfoButtonComponent {
  @Input() title;
}
