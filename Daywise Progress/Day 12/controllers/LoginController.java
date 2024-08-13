package com.example.sdp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.sdp.dto.LoginRequest;
import com.example.sdp.dto.LoginResponse;
import com.example.sdp.models.Login;
import com.example.sdp.repos.LoginRepo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private LoginRepo loginRepo;

    @PostMapping("/employee")
    public ResponseEntity<LoginResponse> loginEmployee(@RequestBody LoginRequest loginRequest) {
        String employeeId = loginRequest.getEmployeeId();
        String password = loginRequest.getPassword();

        logger.info("Attempting login for employee ID: {}", employeeId);
        
        Login user = loginRepo.findByEmployeeIdAndPassword(employeeId.trim(), password.trim());

        if (user != null) {
            logger.info("Login successful for employee ID: {}", employeeId);
            return ResponseEntity.ok(new LoginResponse(true));
        } else {
            logger.warn("Login failed for employee ID: {}", employeeId);
            return ResponseEntity.ok(new LoginResponse(false));
        }
    }

    @PostMapping("/admin")
    public ResponseEntity<LoginResponse> loginAdmin(@RequestBody LoginRequest loginRequest) {
        String adminId = loginRequest.getAdminId();
        String password = loginRequest.getPassword();

        logger.info("Attempting login for admin ID: {}", adminId);

        Login admin = loginRepo.findByEmployeeIdAndPassword(adminId.trim(), password.trim());

        if (admin != null) {
            logger.info("Login successful for admin ID: {}", adminId);
            return ResponseEntity.ok(new LoginResponse(true));
        } else {
            logger.warn("Login failed for admin ID: {}", adminId);
            return ResponseEntity.ok(new LoginResponse(false));
        }
    }
}
