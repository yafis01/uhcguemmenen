import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right',
            timeOut: 3000,
            preventDuplicates: true
        })
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
