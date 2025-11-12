import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes)
    ]
}).then(appRef => {
    const injector = appRef.injector;
    const router = injector.get(Router);

    router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
});
