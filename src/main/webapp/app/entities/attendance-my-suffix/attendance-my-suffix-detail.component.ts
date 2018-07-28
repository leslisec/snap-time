import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';

@Component({
    selector: 'jhi-attendance-my-suffix-detail',
    templateUrl: './attendance-my-suffix-detail.component.html'
})
export class AttendanceMySuffixDetailComponent implements OnInit {
    attendance: IAttendanceMySuffix;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ attendance }) => {
            this.attendance = attendance;
        });
    }

    previousState() {
        window.history.back();
    }
}
