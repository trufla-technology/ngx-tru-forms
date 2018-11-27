import { Component, Input } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'jf-error, [jf-error]',
  template: `
    <div *ngIf="control.invalid && (control.dirty || control.touched)" class="invalid-feedback">
      <ng-container *ngIf="control.errors && control.errors['required']">
        This field is required.
      </ng-container>
      <ng-container *ngIf="control.errors && control.errors['pattern']">
        Input value is invalid.
      </ng-container>
      <ng-container *ngIf="control.errors && control.errors['minlength']">
        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.
      </ng-container>
      <ng-container *ngIf="control.errors && control.errors['maxlength']">
        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.
      </ng-container>
      <ng-container *ngIf="control.errors && control.errors['min']">
        Enter a value greater than or equal to {{control.errors['min']['min']}}.
      </ng-container>
      <ng-container *ngIf="control.errors && control.errors['max']">
        Enter a value less than or equal to {{control.errors['max']['max']}}.
      </ng-container>
      <ng-container *ngIf="control.errors && control.errors['customError']">
        {{control.errors['customError']}}
      </ng-container>
    </div>
  `
})
export class ErrorComponent extends CommonComponent {
  @Input() control;
}
