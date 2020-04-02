import { Component, OnInit } from '@angular/core';
import { AreasService } from './areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: 'areas.component.html'
})


export class AreasComponent implements OnInit  {
    constructor(private myService: AreasService) {}
    areas;

  ngOnInit() {
    this.myService.getAreas()
      .subscribe(res => this.areas = res);
  }
}
