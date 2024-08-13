package com.example.sdp.controllers;

import com.example.sdp.models.UserReport;
import com.example.sdp.services.UserReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserReportController {

    @Autowired
    private UserReportService userReportService;

    @GetMapping
    public ResponseEntity<List<UserReport>> getAllUsers() {
        List<UserReport> users = userReportService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping
    public ResponseEntity<UserReport> addUser(@RequestBody UserReport user) {
        UserReport newUser = userReportService.addUser(user);
        return ResponseEntity.ok(newUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserReport> updateUser(@PathVariable("id") Long id, @RequestBody UserReport user) {
        UserReport updatedUser = userReportService.updateUser(id, user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        userReportService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
