import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from './area';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AreasService {

  constructor(private httpService: HttpClient) { }

  getAreas(): Observable<Area[]> {
    return this.httpService.get('../../assets/areas.json').
      pipe(
        map((data: Area[]) => {
          return data;
        }),
      );
  }
}
