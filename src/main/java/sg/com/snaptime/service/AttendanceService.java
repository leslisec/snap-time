package sg.com.snaptime.service;

import sg.com.snaptime.service.dto.AttendanceDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Attendance.
 */
public interface AttendanceService {

    /**
     * Save a attendance.
     *
     * @param attendanceDTO the entity to save
     * @return the persisted entity
     */
    AttendanceDTO save(AttendanceDTO attendanceDTO);

    /**
     * Get all the attendances.
     *
     * @return the list of entities
     */
    List<AttendanceDTO> findAll();


    /**
     * Get the "id" attendance.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<AttendanceDTO> findOne(Long id);

    /**
     * Delete the "id" attendance.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
