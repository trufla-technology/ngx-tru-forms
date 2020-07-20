import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jf-tru-ui-button',
  templateUrl: './tru-ui-button.component.html',
  styleUrls: ['./tru-ui-button.component.css']
})
export class TruUiButtonComponent {
  @Input() isVisible;
  @Input() type;
  @Input() class;
  @Input() isWorking;
  @Input() disabled;
  @Input() submit;
  @Input() label;
  @Input() color = '';
  @Output() handleButtonClick = new EventEmitter();

  handleClick(event) {
    this.handleButtonClick.emit(event);
  }
}
