package com.example.sdp.services;

import org.springframework.stereotype.Service;

@Service
public class LoginService {

    public boolean authenticateEmployee(String employeeId, String password) {
        // Implement authentication logic
        return "employee123".equals(employeeId) && "password".equals(password);  // Dummy check
    }

    public boolean authenticateAdmin(String adminId, String password) {
        // Implement authentication logic
        return "admin123".equals(adminId) && "adminPass".equals(password);  // Dummy check
    }
}
