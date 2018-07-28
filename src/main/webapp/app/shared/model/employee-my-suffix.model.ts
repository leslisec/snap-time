import { IAttendanceMySuffix } from 'app/shared/model//attendance-my-suffix.model';

export interface IEmployeeMySuffix {
    id?: number;
    employeeId?: number;
    name?: string;
    companyName?: string;
    attendances?: IAttendanceMySuffix[];
}

export class EmployeeMySuffix implements IEmployeeMySuffix {
    constructor(
        public id?: number,
        public employeeId?: number,
        public name?: string,
        public companyName?: string,
        public attendances?: IAttendanceMySuffix[]
    ) {}
}
