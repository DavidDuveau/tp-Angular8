import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  title = 'Mon App';
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  @Input()
  navbarDisplay: boolean;

  constructor() {}

  ngOnInit() {}
}
