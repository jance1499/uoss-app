import { Component, OnInit } from '@angular/core';
import { AreasService } from './areas.service';
import { Area } from './area';

@Component({
  selector: 'app-areas',
  templateUrl: 'areas.component.html'
})

export class AreasComponent implements OnInit  {
  areas: Area[];
  minXP: number;
  maxXP: number;

  constructor(private areaService: AreasService) {}

  ngOnInit() {
    this.areaService.getAreas().subscribe((areas) => (this.areas = areas));
  }

  onChangeMinXPSearch(minXPSearch: string): void {
    this.areaService.getAreas().subscribe((areas) => (this.areas = areas));
    this.areaService.getAreas().toPromise().then(result => {
      this.minXP = +minXPSearch;
      if (this.minXP === null || this.minXP === 0) {
        return;
      }

      this.areas = this.areas.filter(area =>  {
        if (area.minXP >= this.minXP && !this.maxXP) {
          console.log('No MAXXP defined');
          return true;
        }
        if (area.minXP >= this.minXP && area.maxXP <= this.maxXP) {
          return true;
        }
        return false;
      });
    });
  }

  onChangeMaxXPSearch(maxXPSearch: string): void {
    this.areaService.getAreas().subscribe((areas) => (this.areas = areas));
    this.areaService.getAreas().toPromise().then(result => {
      this.maxXP = +maxXPSearch;
      if (this.maxXP === null || this.maxXP === 0) {
        return;
      }

      this.areas = this.areas.filter(area =>  {
        if (area.maxXP <= this.maxXP && !this.minXP) {
          return true;
        }
        if (area.maxXP <= this.maxXP && area.minXP >= this.minXP) {
          console.log('Hit the nonullMAXXP');
          return true;
        }
        return false;
      });
    });
  }
}
