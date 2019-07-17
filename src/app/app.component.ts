import { Component } from '@angular/core';

import  'rxjs/Rx';

@Component({
  selector: 'piggybank-root',
  template:`
  <nav class="navbar navbar-details">
    <div class="container-fluid">
        <a class="navbar-brand">{{pageTitle}}</a>
        <ul class="nav navbar-nav">
            <li><a [routerLink]="['welcome']">Home</a></li>
            <li><a [routerLink]="['customers']">Customer List</a></li>
        </ul>
    </div>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
//  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle:string = 'The Piggy Bank';
}


