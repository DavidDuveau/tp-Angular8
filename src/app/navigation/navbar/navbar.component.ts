import { Component, OnInit, Input } from '@angular/core';
import { NavbarDisplayService } from '../service/navbar-display.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  title = 'Mon App';
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  navbarDisplay: Observable<boolean>;

  constructor(private navbarDisplayService: NavbarDisplayService) {}

  ngOnInit() {
    this.navbarDisplay = this.navbarDisplayService.onChangeDisplay();
  }
}
