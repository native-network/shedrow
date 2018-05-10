import { Injectable } from '@angular/core';
import { Tribe } from './tribe';
import { TRIBES } from '../shared/mocks/mock-tribes';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TribeService {

  constructor() { }

  getTribes(): Observable<Tribe[]> {
    return of(TRIBES);
  }

  getTribe(id: string): Observable<Tribe> {
    return of(TRIBES.find(tribe => tribe.address === id));
  }
  

}
