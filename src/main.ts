import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // Ensure HttpClient is available

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),   // Provide routes
    provideHttpClient()      // Provide HttpClient for services like UserService
  ]
}).catch(err => console.error(err));
