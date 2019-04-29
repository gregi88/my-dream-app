import { Component, OnInit } from '@angular/core';


@Component({
  // selectin by element
  // selector: 'app-servers',

  // using css atribute selector in []
  //selector: '[app-servers]',

  // using class selector
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  count = 0;
  serverName = "";
  username = '';
  user = '';
  removeMessage = '';
  serverCreated = false;

  /* button turns on after 2s */
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; 
    }, 2000);
   }


  ngOnInit() {
  }

  onReset(){
    this.user = '';
    this.removeMessage = 'User has been removed';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
    
  }

}
