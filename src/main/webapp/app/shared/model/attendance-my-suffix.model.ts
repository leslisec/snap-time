import { Moment } from 'moment';

export interface IAttendanceMySuffix {
    id?: number;
    attendanceId?: number;
    clockIn?: Moment;
    clockOut?: Moment;
    employeeId?: number;
}

export class AttendanceMySuffix implements IAttendanceMySuffix {
    constructor(
        public id?: number,
        public attendanceId?: number,
        public clockIn?: Moment,
        public clockOut?: Moment,
        public employeeId?: number
    ) {}
}
