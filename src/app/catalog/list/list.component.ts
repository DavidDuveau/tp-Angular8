import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private cardService: CardService) {}
  monPath = 'plop';
  cards: [
    {
      name: '1';
      cardId: 1;
    }
  ];

  ngOnInit() {
    this.cardService.getCards('Basic').subscribe(cards => console.log(cards));
  }
}
