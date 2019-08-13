import { Injectable } from '@angular/core';
import { fakecards } from '../app/fakecards';
import { Card } from '../models/card'

//Get data asynchronously with Observable
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  getCards(): Observable<Card[]> {
    return of(fakecards);
  }
  constructor() { }
}
