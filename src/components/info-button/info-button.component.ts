import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jf-info-button',
  template: `
    <button
      *ngIf="title"
      class="btn btn-light" [attr.title]="title">Info</button>
  `
})
export class InfoButtonComponent {
  @Input() title;
}
