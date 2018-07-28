import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'snaptime'
        }
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'snaptime',
            error403: true
        }
    }
];
