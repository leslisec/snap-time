import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';
import { EmployeeMySuffixService } from './employee-my-suffix.service';
import { EmployeeMySuffixComponent } from './employee-my-suffix.component';
import { EmployeeMySuffixDetailComponent } from './employee-my-suffix-detail.component';
import { EmployeeMySuffixUpdateComponent } from './employee-my-suffix-update.component';
import { EmployeeMySuffixDeletePopupComponent } from './employee-my-suffix-delete-dialog.component';
import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';

@Injectable({ providedIn: 'root' })
export class EmployeeMySuffixResolve implements Resolve<IEmployeeMySuffix> {
    constructor(private service: EmployeeMySuffixService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((employee: HttpResponse<EmployeeMySuffix>) => employee.body));
        }
        return of(new EmployeeMySuffix());
    }
}

export const employeeRoute: Routes = [
    {
        path: 'employee-my-suffix',
        component: EmployeeMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'employee-my-suffix/:id/view',
        component: EmployeeMySuffixDetailComponent,
        resolve: {
            employee: EmployeeMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'employee-my-suffix/new',
        component: EmployeeMySuffixUpdateComponent,
        resolve: {
            employee: EmployeeMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'employee-my-suffix/:id/edit',
        component: EmployeeMySuffixUpdateComponent,
        resolve: {
            employee: EmployeeMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const employeePopupRoute: Routes = [
    {
        path: 'employee-my-suffix/:id/delete',
        component: EmployeeMySuffixDeletePopupComponent,
        resolve: {
            employee: EmployeeMySuffixResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Employees'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
