package com.example.sdp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sdp.dto.RegisterRequest;
import com.example.sdp.models.Register;
import com.example.sdp.repos.RegisterRepo;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepo userRepository;

    public boolean registerEmployee(RegisterRequest registerRequest) {
        // Check if employee ID or email already exists
        if (userRepository.existsByEmployeeId(registerRequest.getEmployeeId()) ||
            userRepository.existsByEmail(registerRequest.getEmail())) {
            return false; // Registration fails if employee ID or email already exists
        }

        // Create a new User entity
        Register user = new Register();
        user.setEmployeeId(registerRequest.getEmployeeId());
        user.setName(registerRequest.getName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword()); // In a real application, hash the password before saving

        // Save the user to the database
        userRepository.save(user);
        return true; // Registration success
    }
}
