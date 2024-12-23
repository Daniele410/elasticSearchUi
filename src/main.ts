import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(routes),        // Configura le rotte
    provideHttpClient(), provideAnimationsAsync()           // Abilita HttpClient per le chiamate API
  ]
}).catch(err => console.error(err));
