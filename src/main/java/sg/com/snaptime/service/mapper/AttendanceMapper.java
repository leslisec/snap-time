package sg.com.snaptime.service.mapper;

import sg.com.snaptime.domain.*;
import sg.com.snaptime.service.dto.AttendanceDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Attendance and its DTO AttendanceDTO.
 */
@Mapper(componentModel = "spring", uses = {EmployeeMapper.class})
public interface AttendanceMapper extends EntityMapper<AttendanceDTO, Attendance> {

    @Mapping(source = "employee.id", target = "employeeId")
    AttendanceDTO toDto(Attendance attendance);

    @Mapping(source = "employeeId", target = "employee")
    Attendance toEntity(AttendanceDTO attendanceDTO);

    default Attendance fromId(Long id) {
        if (id == null) {
            return null;
        }
        Attendance attendance = new Attendance();
        attendance.setId(id);
        return attendance;
    }
}
