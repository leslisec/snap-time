package sg.com.snaptime.service.dto;

import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Attendance entity.
 */
public class AttendanceDTO implements Serializable {

    private Long id;

    private Long attendanceId;

    private ZonedDateTime clockIn;

    private ZonedDateTime clockOut;

    private Long employeeId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
    }

    public ZonedDateTime getClockIn() {
        return clockIn;
    }

    public void setClockIn(ZonedDateTime clockIn) {
        this.clockIn = clockIn;
    }

    public ZonedDateTime getClockOut() {
        return clockOut;
    }

    public void setClockOut(ZonedDateTime clockOut) {
        this.clockOut = clockOut;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        AttendanceDTO attendanceDTO = (AttendanceDTO) o;
        if (attendanceDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), attendanceDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "AttendanceDTO{" +
            "id=" + getId() +
            ", attendanceId=" + getAttendanceId() +
            ", clockIn='" + getClockIn() + "'" +
            ", clockOut='" + getClockOut() + "'" +
            ", employee=" + getEmployeeId() +
            "}";
    }
}
