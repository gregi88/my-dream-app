import { Component, OnInit } from '@angular/core';

@Component({
  // selectin by element
  //selector: 'app-servers',

  // using css atribute selector in []
  //selector: '[app-servers]',

  // selecting by class
  selector: '.app-servers',
  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
