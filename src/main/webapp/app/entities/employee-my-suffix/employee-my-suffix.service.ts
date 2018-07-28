import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';

type EntityResponseType = HttpResponse<IEmployeeMySuffix>;
type EntityArrayResponseType = HttpResponse<IEmployeeMySuffix[]>;

@Injectable({ providedIn: 'root' })
export class EmployeeMySuffixService {
    private resourceUrl = SERVER_API_URL + 'api/employees';

    constructor(private http: HttpClient) {}

    create(employee: IEmployeeMySuffix): Observable<EntityResponseType> {
        return this.http.post<IEmployeeMySuffix>(this.resourceUrl, employee, { observe: 'response' });
    }

    update(employee: IEmployeeMySuffix): Observable<EntityResponseType> {
        return this.http.put<IEmployeeMySuffix>(this.resourceUrl, employee, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IEmployeeMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IEmployeeMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
