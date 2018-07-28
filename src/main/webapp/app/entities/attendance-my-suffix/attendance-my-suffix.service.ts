import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAttendanceMySuffix } from 'app/shared/model/attendance-my-suffix.model';

type EntityResponseType = HttpResponse<IAttendanceMySuffix>;
type EntityArrayResponseType = HttpResponse<IAttendanceMySuffix[]>;

@Injectable({ providedIn: 'root' })
export class AttendanceMySuffixService {
    private resourceUrl = SERVER_API_URL + 'api/attendances';

    constructor(private http: HttpClient) {}

    create(attendance: IAttendanceMySuffix): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(attendance);
        return this.http
            .post<IAttendanceMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(attendance: IAttendanceMySuffix): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(attendance);
        return this.http
            .put<IAttendanceMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IAttendanceMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IAttendanceMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(attendance: IAttendanceMySuffix): IAttendanceMySuffix {
        const copy: IAttendanceMySuffix = Object.assign({}, attendance, {
            clockIn: attendance.clockIn != null && attendance.clockIn.isValid() ? attendance.clockIn.toJSON() : null,
            clockOut: attendance.clockOut != null && attendance.clockOut.isValid() ? attendance.clockOut.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.clockIn = res.body.clockIn != null ? moment(res.body.clockIn) : null;
        res.body.clockOut = res.body.clockOut != null ? moment(res.body.clockOut) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((attendance: IAttendanceMySuffix) => {
            attendance.clockIn = attendance.clockIn != null ? moment(attendance.clockIn) : null;
            attendance.clockOut = attendance.clockOut != null ? moment(attendance.clockOut) : null;
        });
        return res;
    }
}
