import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../interface/card';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpClient: HttpClient) {}

  get endpoint() {
    return 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  }

  get httpOptions() {
    let headers = new HttpHeaders();
    headers = headers.append(
      'x-rapidapi-host',
      'omgvamp-hearthstone-v1.p.rapidapi.com'
    );
    headers = headers.append(
      'x-rapidapi-key',
      'd99e92cde6mshffcf37544a876bep14eb15jsn1c1928e0dec3'
    );
    return {
      headers
    };
  }

  getCards(setName: string, className?: string): Observable<Card[]> {
    return this.set(setName);
  }

  getCardById(id: string): Observable<Card> {
    return this.httpClient
      .get(`${this.endpoint}cards/${id}`, this.httpOptions)
      .pipe(map((card: Card[]) => card[0]));
  }

  private set(name: string): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endpoint}cards/sets/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  private playerClass(name: string): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endpoint}cards/classes/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }
}
