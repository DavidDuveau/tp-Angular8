import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavbarDisplayService } from '../service/navbar-display.service';

@Component({
  selector: 'app-btn-display-navbar',
  templateUrl: './btn-display-navbar.component.html',
  styleUrls: ['./btn-display-navbar.component.scss']
})
export class BtnDisplayNavbarComponent implements OnInit {
  constructor(private navbarDisplayService: NavbarDisplayService) {}

  ngOnInit() {}

  toggleDisplay() {
    this.navbarDisplayService.toggleDisplay();
  }
}
