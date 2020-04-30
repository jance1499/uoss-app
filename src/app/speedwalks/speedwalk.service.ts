import { Injectable } from '@angular/core';
import { Speedwalk } from './speedwalk';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeedwalkService {
   speedwalks: AngularFireList<Speedwalk>;

  getSpeedWalks(): Observable<Speedwalk[]> {
    return this.database.list<Speedwalk>('/speedwalks').valueChanges();
  }

  constructor(private database: AngularFireDatabase) {
   }
}
