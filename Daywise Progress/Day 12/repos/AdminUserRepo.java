package com.example.sdp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sdp.models.AdminUser;

@Repository
public interface AdminUserRepo extends JpaRepository<AdminUser, Long> {
}
