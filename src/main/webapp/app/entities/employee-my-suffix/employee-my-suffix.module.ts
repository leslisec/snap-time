import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SnaptimeSharedModule } from 'app/shared';
import {
    EmployeeMySuffixComponent,
    EmployeeMySuffixDetailComponent,
    EmployeeMySuffixUpdateComponent,
    EmployeeMySuffixDeletePopupComponent,
    EmployeeMySuffixDeleteDialogComponent,
    employeeRoute,
    employeePopupRoute
} from './';

const ENTITY_STATES = [...employeeRoute, ...employeePopupRoute];

@NgModule({
    imports: [SnaptimeSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EmployeeMySuffixComponent,
        EmployeeMySuffixDetailComponent,
        EmployeeMySuffixUpdateComponent,
        EmployeeMySuffixDeleteDialogComponent,
        EmployeeMySuffixDeletePopupComponent
    ],
    entryComponents: [
        EmployeeMySuffixComponent,
        EmployeeMySuffixUpdateComponent,
        EmployeeMySuffixDeleteDialogComponent,
        EmployeeMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnaptimeEmployeeMySuffixModule {}
