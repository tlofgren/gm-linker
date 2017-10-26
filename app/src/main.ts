import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { cgpAuthentication } from './modules/cgp-authentication';
import { getTranslationProviders } from "./app/i18n-providers";

import './favicon.ico';
import '../node_modules/font-awesome/css/font-awesome.css';
import './assets/material-icons/MaterialIcons.css';
import './assets/material-themes/cgp-theme.scss';
import './assets/sass/cgp-kendo-ui-theme.css';
import './assets/sass/cgpKendo.scss';
import './assets/sass/cgp.scss';
import './assets/sass/app.scss';

if (process.env.ENV === 'production') {
    enableProdMode();

    cgpAuthentication.validateToken(function() {
        platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.error(err));
    });
} else {
    getTranslationProviders().then(providers => {
        const options = { providers };
        cgpAuthentication.validateToken(function() {
            platformBrowserDynamic()
            .bootstrapModule(AppModule, options)
            .catch(err => console.error(err));
        });
    });
}