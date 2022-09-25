import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "jf-button",
  template: `
    <button
      *ngIf="isVisible"
      [type]="type"
      [ngClass]="class"
      [disabled]="disabled"
      (click)="handleClick($event)"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() isVisible;
  @Input() type;
  @Input() class;
  @Input() isWorking;
  @Input() disabled;
  @Input() submit;
  @Input() label;
  @Input() color = "";
  @Output() handleButtonClick = new EventEmitter();

  handleClick(event) {
    this.handleButtonClick.emit(event);
  }
}
