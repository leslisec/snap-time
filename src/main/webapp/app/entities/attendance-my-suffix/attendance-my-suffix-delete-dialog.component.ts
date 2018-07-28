import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IAttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';
import { AttendanceMySuffixService } from './attendance-my-suffix.service';

@Component({
    selector: 'jhi-attendance-my-suffix-delete-dialog',
    templateUrl: './attendance-my-suffix-delete-dialog.component.html'
})
export class AttendanceMySuffixDeleteDialogComponent {
    attendance: IAttendanceMySuffix;

    constructor(
        private attendanceService: AttendanceMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.attendanceService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'attendanceListModification',
                content: 'Deleted an attendance'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-attendance-my-suffix-delete-popup',
    template: ''
})
export class AttendanceMySuffixDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ attendance }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(AttendanceMySuffixDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.attendance = attendance;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
