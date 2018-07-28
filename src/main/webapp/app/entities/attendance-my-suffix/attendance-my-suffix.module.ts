import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SnaptimeSharedModule } from 'app/shared';
import {
    AttendanceMySuffixComponent,
    AttendanceMySuffixDetailComponent,
    AttendanceMySuffixUpdateComponent,
    AttendanceMySuffixDeletePopupComponent,
    AttendanceMySuffixDeleteDialogComponent,
    attendanceRoute,
    attendancePopupRoute
} from './';

const ENTITY_STATES = [...attendanceRoute, ...attendancePopupRoute];

@NgModule({
    imports: [SnaptimeSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AttendanceMySuffixComponent,
        AttendanceMySuffixDetailComponent,
        AttendanceMySuffixUpdateComponent,
        AttendanceMySuffixDeleteDialogComponent,
        AttendanceMySuffixDeletePopupComponent
    ],
    entryComponents: [
        AttendanceMySuffixComponent,
        AttendanceMySuffixUpdateComponent,
        AttendanceMySuffixDeleteDialogComponent,
        AttendanceMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnaptimeAttendanceMySuffixModule {}
