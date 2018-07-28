import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SnaptimeEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { SnaptimeAttendanceMySuffixModule } from './attendance-my-suffix/attendance-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        SnaptimeEmployeeMySuffixModule,
        SnaptimeAttendanceMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnaptimeEntityModule {}
