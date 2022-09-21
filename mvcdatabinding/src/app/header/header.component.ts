import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  //model : primitive -string,number,boolean,object,array
  title: string = 'MVC Application- Data Binding'
  constructor() { }

  ngOnInit(): void {
  }

}
