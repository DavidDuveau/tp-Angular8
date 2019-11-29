import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { Observable } from 'rxjs';
import { Card } from '../interface/card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private cardService: CardService) {}
  cards$: Observable<Card[]>;

  ngOnInit() {
    this.cards$ = this.cardService.getCards('Basic');
    this.cardService.getCards('Basic').subscribe(cards => console.log(cards));
  }
}
