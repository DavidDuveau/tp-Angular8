import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  title = "Mon App";
  logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";

  @Input()
  navbarDisplay: boolean;

  constructor() {}

  ngOnInit() {}
}
