import { Injectable } from '@angular/core';
import { Speedwalk } from './speedwalk';
import { SPEEDWALKS } from './mock-speedwalks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedwalkService {
  getSpeedWalks():  Observable<Speedwalk[]> {
    return of(SPEEDWALKS);
  }

  constructor() { }
}