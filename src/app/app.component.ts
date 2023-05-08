import { Component } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]

})
export class AppComponent {
  title = 'portfolio';
}
