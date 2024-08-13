package com.example.sdp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sdp.models.Register;

public interface RegisterRepo extends JpaRepository<Register, Long> {
    boolean existsByEmployeeId(String employeeId);
    boolean existsByEmail(String email);
}
