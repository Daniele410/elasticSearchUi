import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elasticsearch-fe';
}
