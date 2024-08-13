package com.example.sdp.repos;

import com.example.sdp.models.UserReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserReportRepo extends JpaRepository<UserReport, Long> {
}
