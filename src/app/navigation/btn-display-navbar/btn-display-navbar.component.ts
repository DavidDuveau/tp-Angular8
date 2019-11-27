import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-btn-display-navbar",
  templateUrl: "./btn-display-navbar.component.html",
  styleUrls: ["./btn-display-navbar.component.scss"]
})
export class BtnDisplayNavbarComponent implements OnInit {
  @Output()
  navbarDisplayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  navbarDisplay: boolean;

  constructor() {}

  ngOnInit() {}

  toggleDisplay() {
    this.navbarDisplay = !this.navbarDisplay;
    this.navbarDisplayChange.emit(this.navbarDisplay);
  }
}
