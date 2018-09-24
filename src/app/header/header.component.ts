import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from '../shared/serach.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm;
  searchText: Search;
  constructor(private formbuilder: FormBuilder) {
    this.searchForm = this.createSearchForm;
  }
  onSubmit() {
    const text: Search = Object.assign({},
      this.searchForm.value);
      console.log(text);
  }

  createSearchForm(formbuilder: FormBuilder) {
    return formbuilder.group({
      searchText: formbuilder.group(this.searchText)
    });
  }
  ngOnInit() {
  }

}
