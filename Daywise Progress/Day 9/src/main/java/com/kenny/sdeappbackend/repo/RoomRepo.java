package com.kenny.sdeappbackend.repo;

import com.kenny.sdeappbackend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepo extends JpaRepository<Room,Long> {
}
