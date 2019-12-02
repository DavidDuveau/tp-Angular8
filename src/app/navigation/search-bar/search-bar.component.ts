import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { SearchBarService } from 'src/app/catalog/service/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  query: string;

  constructor(private searchBarService: SearchBarService) {}

  ngOnInit() {}

  submit(form: NgForm) {
    console.log('SUBMIT', form, this.query);
    if (form.valid) {
      this.searchBarService.searchForm$.next(this.query);
    }
  }
}
