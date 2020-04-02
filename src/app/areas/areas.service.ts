import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AreasService {

  constructor(private httpService: HttpClient) { }

  getAreas() {
    return this.httpService.get('../../assets/areas.json');
  }
}
