import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';
import { AttendanceMySuffixService } from './attendance-my-suffix.service';
import { AttendanceMySuffixComponent } from './attendance-my-suffix.component';
import { AttendanceMySuffixDetailComponent } from './attendance-my-suffix-detail.component';
import { AttendanceMySuffixUpdateComponent } from './attendance-my-suffix-update.component';
import { AttendanceMySuffixDeletePopupComponent } from './attendance-my-suffix-delete-dialog.component';
import { IAttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';

@Injectable({ providedIn: 'root' })
export class AttendanceMySuffixResolve implements Resolve<IAttendanceMySuffix> {
    constructor(private service: AttendanceMySuffixService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((attendance: HttpResponse<AttendanceMySuffix>) => attendance.body));
        }
        return of(new AttendanceMySuffix());
    }
}

export const attendanceRoute: Routes = [
    {
        path: 'attendance-my-suffix',
        component: AttendanceMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Attendances'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'attendance-my-suffix/:id/view',
        component: AttendanceMySuffixDetailComponent,
        resolve: {
            attendance: AttendanceMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Attendances'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'attendance-my-suffix/new',
        component: AttendanceMySuffixUpdateComponent,
        resolve: {
            attendance: AttendanceMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Attendances'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'attendance-my-suffix/:id/edit',
        component: AttendanceMySuffixUpdateComponent,
        resolve: {
            attendance: AttendanceMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Attendances'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const attendancePopupRoute: Routes = [
    {
        path: 'attendance-my-suffix/:id/delete',
        component: AttendanceMySuffixDeletePopupComponent,
        resolve: {
            attendance: AttendanceMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Attendances'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
