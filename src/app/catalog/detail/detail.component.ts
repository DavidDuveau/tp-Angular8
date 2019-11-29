import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../service/card.service';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Card } from '../interface/card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  card$: Observable<Card>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) {}

  ngOnInit() {
    console.log('INIT');
    this.card$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.cardService.getCardById(id)),
      tap(card => console.log(card)),
      catchError(reason => {
        console.log(reason);
        this.router.navigate(['..']);
        return throwError('not found');
      })
    );

    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params);
    //   this.cardService
    //     .getCardById(params.id)
    //     .subscribe(card => console.log(card));
    // });
    // this.cardService
    //   .getCardById('HERO_09')
    //   .subscribe(card => console.log(card));
  }
}
