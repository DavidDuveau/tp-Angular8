import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getCards(setName: string, className?: string) {
    return this.set(setName);
  }

  private set(name) {
    return this.httpClient.get(
      `${this.endpoint}cards/sets/${name}`,
      this.httpOptions
    );
  }
}
