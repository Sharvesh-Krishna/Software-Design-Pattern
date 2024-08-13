package com.example.sdp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sdp.models.Login;

public interface LoginRepo extends JpaRepository<Login, Long> {
    Login findByEmployeeId(String employeeId);

    Login findByEmployeeIdAndPassword(String trim, String trim2);
}
