import { Component, OnInit } from '@angular/core';
declare function customInitFunction();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  theme: any;

  constructor(
  ) { }

  ngOnInit() {
    customInitFunction();
  }

}
