package sg.com.snaptime.service.mapper;

import sg.com.snaptime.domain.*;
import sg.com.snaptime.service.dto.EmployeeDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Employee and its DTO EmployeeDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EmployeeMapper extends EntityMapper<EmployeeDTO, Employee> {


    @Mapping(target = "attendances", ignore = true)
    Employee toEntity(EmployeeDTO employeeDTO);

    default Employee fromId(Long id) {
        if (id == null) {
            return null;
        }
        Employee employee = new Employee();
        employee.setId(id);
        return employee;
    }
}
