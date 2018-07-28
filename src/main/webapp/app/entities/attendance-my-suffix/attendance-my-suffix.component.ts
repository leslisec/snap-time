import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';
import { Principal } from 'app/core';
import { AttendanceMySuffixService } from './attendance-my-suffix.service';

@Component({
    selector: 'jhi-attendance-my-suffix',
    templateUrl: './attendance-my-suffix.component.html'
})
export class AttendanceMySuffixComponent implements OnInit, OnDestroy {
    attendances: IAttendanceMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private attendanceService: AttendanceMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.attendanceService.query().subscribe(
            (res: HttpResponse<IAttendanceMySuffix[]>) => {
                this.attendances = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInAttendances();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IAttendanceMySuffix) {
        return item.id;
    }

    registerChangeInAttendances() {
        this.eventSubscriber = this.eventManager.subscribe('attendanceListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
