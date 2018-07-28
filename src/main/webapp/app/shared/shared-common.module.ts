import { NgModule } from '@angular/core';

import { SnaptimeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SnaptimeSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SnaptimeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SnaptimeSharedCommonModule {}
