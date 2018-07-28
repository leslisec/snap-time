import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';

import { IAttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';
import { AttendanceMySuffixService } from './attendance-my-suffix.service';
import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';
import { EmployeeMySuffixService } from 'app/entities/employee-my-suffix';

@Component({
    selector: 'jhi-attendance-my-suffix-update',
    templateUrl: './attendance-my-suffix-update.component.html'
})
export class AttendanceMySuffixUpdateComponent implements OnInit {
    private _attendance: IAttendanceMySuffix;
    isSaving: boolean;

    employees: IEmployeeMySuffix[];
    clockIn: string;
    clockOut: string;

    constructor(
        private jhiAlertService: JhiAlertService,
        private attendanceService: AttendanceMySuffixService,
        private employeeService: EmployeeMySuffixService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ attendance }) => {
            this.attendance = attendance;
        });
        this.employeeService.query().subscribe(
            (res: HttpResponse<IEmployeeMySuffix[]>) => {
                this.employees = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.attendance.clockIn = moment(this.clockIn, DATE_TIME_FORMAT);
        this.attendance.clockOut = moment(this.clockOut, DATE_TIME_FORMAT);
        if (this.attendance.id !== undefined) {
            this.subscribeToSaveResponse(this.attendanceService.update(this.attendance));
        } else {
            this.subscribeToSaveResponse(this.attendanceService.create(this.attendance));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAttendanceMySuffix>>) {
        result.subscribe((res: HttpResponse<IAttendanceMySuffix>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackEmployeeById(index: number, item: IEmployeeMySuffix) {
        return item.id;
    }
    get attendance() {
        return this._attendance;
    }

    set attendance(attendance: IAttendanceMySuffix) {
        this._attendance = attendance;
        this.clockIn = moment(attendance.clockIn).format(DATE_TIME_FORMAT);
        this.clockOut = moment(attendance.clockOut).format(DATE_TIME_FORMAT);
    }
}
