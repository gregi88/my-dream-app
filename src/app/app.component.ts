import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // u can use stylesheet
  //styleUrls: ['./app.component.css'],
  // or inline style
  styles: [`
    h3{
      font-size: 50px;
      color: orange;
    }
  `]
})
export class AppComponent {
  
}
