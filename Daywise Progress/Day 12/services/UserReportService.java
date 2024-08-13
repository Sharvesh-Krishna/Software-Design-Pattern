package com.example.sdp.services;

import com.example.sdp.models.UserReport;
import com.example.sdp.repos.UserReportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserReportService {

    @Autowired
    private UserReportRepo userReportRepo;

    public List<UserReport> getAllUsers() {
        return userReportRepo.findAll();
    }

    public UserReport addUser(UserReport user) {
        return userReportRepo.save(user);
    }

    public UserReport updateUser(Long id, UserReport user) {
        if (userReportRepo.existsById(id)) {
            user.setId(id);
            return userReportRepo.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public void deleteUser(Long id) {
        if (userReportRepo.existsById(id)) {
            userReportRepo.deleteById(id);
        } else {
            throw new RuntimeException("User not found");
        }
    }
}
