import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  constructor() {}
  monPath = "plop";
  cards = [
    {
      cardId: "1",
      name: "test1"
    },
    {
      cardId: "2",
      name: "test2"
    },
    {
      cardId: "3",
      name: "test3"
    },
    {
      cardId: "4",
      name: "test4"
    },
    {
      cardId: "5",
      name: "test5"
    }
  ];

  ngOnInit() {}
}
