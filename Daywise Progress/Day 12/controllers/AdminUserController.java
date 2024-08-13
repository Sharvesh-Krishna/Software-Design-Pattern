package com.example.sdp.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.sdp.models.AdminUser;
import com.example.sdp.services.AdminUserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:7777") // Update to the correct frontend origin
public class AdminUserController {

    @Autowired
    private AdminUserService adminUserService;

    @GetMapping
    public List<AdminUser> getAllUsers() {
        return adminUserService.getAllAdminUsers();
    }

    @GetMapping("/{id}")
    public AdminUser getUserById(@PathVariable Long id) {
        return adminUserService.getAdminUserById(id);
    }

    @PostMapping
    public AdminUser addUser(@RequestBody AdminUser user) {
        return adminUserService.addAdminUser(user);
    }

    @PutMapping("/{id}")
    public AdminUser updateUser(@PathVariable Long id, @RequestBody AdminUser adminUser) {
        return adminUserService.updateAdminUser(id, adminUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        adminUserService.deleteAdminUser(id);
    }
}
