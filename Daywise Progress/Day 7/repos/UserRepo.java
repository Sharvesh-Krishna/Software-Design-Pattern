package com.example.sdp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sdp.models.Users;

public interface UserRepo extends JpaRepository<Users, String> {
    
}
