import { OnDestroy } from "@angular/core";
import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[jfDragAndDrop]",
})
export class DragAndDropDirective implements OnDestroy {
  @Output() filesDropped = new EventEmitter();
  @Output() filesHovered = new EventEmitter();

  constructor(private renderer: Renderer2) {}
  dragoverlistener = this.renderer.listen("window", "dragover", ($event) => {
    $event.preventDefault();
    this.filesHovered.emit(true);
  });

  drageleavelistener = this.renderer.listen(
    "window",
    "drageleave",
    ($event) => {
      $event.preventDefault();
      this.filesHovered.emit(false);
    }
  );

  droplistener = this.renderer.listen("window", "drop", ($event) => {
    this.filesDropped.emit($event.dataTransfer.files);
    this.filesHovered.emit(false);
  });

  ngOnDestroy() {
    this.dragoverlistener();
    this.drageleavelistener();
    this.droplistener();
  }
}
