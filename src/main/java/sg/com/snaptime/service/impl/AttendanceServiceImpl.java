package sg.com.snaptime.service.impl;

import sg.com.snaptime.service.AttendanceService;
import sg.com.snaptime.domain.Attendance;
import sg.com.snaptime.repository.AttendanceRepository;
import sg.com.snaptime.service.dto.AttendanceDTO;
import sg.com.snaptime.service.mapper.AttendanceMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
/**
 * Service Implementation for managing Attendance.
 */
@Service
@Transactional
public class AttendanceServiceImpl implements AttendanceService {

    private final Logger log = LoggerFactory.getLogger(AttendanceServiceImpl.class);

    private final AttendanceRepository attendanceRepository;

    private final AttendanceMapper attendanceMapper;

    public AttendanceServiceImpl(AttendanceRepository attendanceRepository, AttendanceMapper attendanceMapper) {
        this.attendanceRepository = attendanceRepository;
        this.attendanceMapper = attendanceMapper;
    }

    /**
     * Save a attendance.
     *
     * @param attendanceDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public AttendanceDTO save(AttendanceDTO attendanceDTO) {
        log.debug("Request to save Attendance : {}", attendanceDTO);
        Attendance attendance = attendanceMapper.toEntity(attendanceDTO);
        attendance = attendanceRepository.save(attendance);
        return attendanceMapper.toDto(attendance);
    }

    /**
     * Get all the attendances.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<AttendanceDTO> findAll() {
        log.debug("Request to get all Attendances");
        return attendanceRepository.findAll().stream()
            .map(attendanceMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one attendance by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<AttendanceDTO> findOne(Long id) {
        log.debug("Request to get Attendance : {}", id);
        return attendanceRepository.findById(id)
            .map(attendanceMapper::toDto);
    }

    /**
     * Delete the attendance by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Attendance : {}", id);
        attendanceRepository.deleteById(id);
    }
}
