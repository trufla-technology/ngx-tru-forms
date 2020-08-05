import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {startCase} from 'lodash';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-framework-dropdown',
  templateUrl: './framework-dropdown.component.html',
  styleUrls: ['./framework-dropdown.component.css']
})
export class FrameworkDropdownComponent implements OnInit {

  frameworks = [
    'material',
    'bootstrap'
  ]
  value: string;

  @Output() frameworkChanged = new EventEmitter();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.value = this.location.path() && this.location.path().indexOf('bootstrap') > -1 ? 'bootstrap' : 'material';
  }

  startCase(value) {
    return startCase(value);
  }

  handleFrameworkChange(e) {
    const framework = e.target.value;
    this.frameworkChanged.emit(framework);
    switch (framework) {
      case 'material':
        this.router.navigate(['']);
        break;
      case 'bootstrap':
        this.router.navigate(['bootstrap-example']);
        break;


    }
  }

}
