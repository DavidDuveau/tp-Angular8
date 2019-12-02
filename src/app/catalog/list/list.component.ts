import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';
import { Card } from '../interface/card';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cards$: Observable<Card[]>;
  query: string;
  myform: string;
  info$: Observable<{ classes: string[]; sets: string[] }>;
  searchForm$: Subject<string>;
  filterForm$: BehaviorSubject<{ set: string; classe: string }>;

  filterForm = new FormGroup({
    set: new FormControl('Basic', [Validators.required]),
    classe: new FormControl('Druid', [Validators.required])
  });

  constructor(private cardService: CardService) {}

  ngOnInit() {
    // this.cards$ = this.cardsService.getCards('Basic');

    this.searchForm$ = new Subject();
    this.filterForm$ = new BehaviorSubject({
      set: this.filterForm.get('set').value,
      classe: this.filterForm.get('classe').value
    });
    this.cards$ = merge(
      this.searchForm$.pipe(
        switchMap(query => {
          return this.cardService.search(query);
        })
      ),
      this.filterForm$.pipe(
        switchMap(query => {
          return this.cardService.getCards(query.set, query.classe);
        })
      )
    );
    this.info$ = this.cardService.info();
  }

  submit(form: NgForm) {
    console.log('SUBMIT', form, this.query);
    if (form.valid) {
      this.searchForm$.next(this.query);
    }
  }

  filter() {
    if (this.filterForm.valid) {
      this.filterForm$.next(this.filterForm.getRawValue());
    }
  }
}
