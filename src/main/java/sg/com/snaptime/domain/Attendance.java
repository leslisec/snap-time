package sg.com.snaptime.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Attendance.
 */
@Entity
@Table(name = "attendance")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Attendance implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "attendance_id")
    private Long attendanceId;

    @Column(name = "clock_in")
    private ZonedDateTime clockIn;

    @Column(name = "clock_out")
    private ZonedDateTime clockOut;

    @ManyToOne
    @JsonIgnoreProperties("attendances")
    private Employee employee;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAttendanceId() {
        return attendanceId;
    }

    public Attendance attendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
        return this;
    }

    public void setAttendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
    }

    public ZonedDateTime getClockIn() {
        return clockIn;
    }

    public Attendance clockIn(ZonedDateTime clockIn) {
        this.clockIn = clockIn;
        return this;
    }

    public void setClockIn(ZonedDateTime clockIn) {
        this.clockIn = clockIn;
    }

    public ZonedDateTime getClockOut() {
        return clockOut;
    }

    public Attendance clockOut(ZonedDateTime clockOut) {
        this.clockOut = clockOut;
        return this;
    }

    public void setClockOut(ZonedDateTime clockOut) {
        this.clockOut = clockOut;
    }

    public Employee getEmployee() {
        return employee;
    }

    public Attendance employee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Attendance attendance = (Attendance) o;
        if (attendance.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), attendance.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Attendance{" +
            "id=" + getId() +
            ", attendanceId=" + getAttendanceId() +
            ", clockIn='" + getClockIn() + "'" +
            ", clockOut='" + getClockOut() + "'" +
            "}";
    }
}
