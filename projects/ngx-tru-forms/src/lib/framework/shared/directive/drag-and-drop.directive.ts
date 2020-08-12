import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[jfDragAndDrop]'
})
export class DragAndDropDirective {
  @Output() filesDropped = new EventEmitter();
  @Output() filesHovered = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.filesHovered.emit(true);
  }

  @HostListener('drageleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.filesHovered.emit(false);
  }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.filesDropped.emit($event.dataTransfer.files);
    this.filesHovered.emit(false);

  }

}
