package com.example.sdp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sdp.models.Login;
import com.example.sdp.repos.LoginRepo;

import jakarta.annotation.PostConstruct;

@Service
public class InitializationService {

    @Autowired
    private LoginRepo loginRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostConstruct
    public void init() {
        // Create default admin profiles if they don't already exist
        createDefaultAdmin("ARDS001", "admin@001");
        createDefaultAdmin("ARDS002", "admin@002");
    }

    private void createDefaultAdmin(String adminId, String password) {
        if (loginRepo.findByEmployeeId(adminId) == null) {
            Login admin = new Login();
            admin.setEmployeeId(adminId);
            admin.setPassword(passwordEncoder.encode(password)); // Hash the password
            admin.setRole("ADMIN");
            loginRepo.save(admin);
        }
    }
}
