import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from './equipment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class EquipmentService {

  constructor(private httpService: HttpClient) { }

  getEquipment(): Observable<Equipment[]> {
    return this.httpService.get('../../assets/equipment.json').
      pipe(
        map((data: Equipment[]) => {
          return data;
        }),
      );
  }
}
