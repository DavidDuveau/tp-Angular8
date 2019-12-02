import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  searchForm$: Subject<string> = new Subject();
  constructor() {}
}
