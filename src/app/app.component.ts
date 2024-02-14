import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CustomersComponent } from './customers/customers.component';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  standalone: true,
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  //
  // <p>Angualr is awesome framework</p> `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RoomsComponent, CustomersComponent, CommonModule],
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
