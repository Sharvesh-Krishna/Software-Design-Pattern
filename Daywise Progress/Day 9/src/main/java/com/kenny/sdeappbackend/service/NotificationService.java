package com.kenny.sdeappbackend.service;

import com.kenny.sdeappbackend.exception.ResourceNotFoundException;
import com.kenny.sdeappbackend.model.Notification;
import com.kenny.sdeappbackend.model.User;
import com.kenny.sdeappbackend.repo.NotificationRepo;
import com.kenny.sdeappbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepo notificationRepository;

    @Autowired
    private UserRepo userRepository;

    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    public Optional<Notification> getNotificationById(Long id) {
        return notificationRepository.findById(id);
    }

    public Notification createNotification(Notification notification) {
        Long userId = notification.getUser().getId();
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + userId));
        notification.setUser(user);
        return notificationRepository.save(notification);
    }

    public Notification updateNotification(Long id, Notification notificationDetails) {
        return notificationRepository.findById(id).map(notification -> {
            notification.setMessage(notificationDetails.getMessage());
            notification.setRead(notificationDetails.isRead());

            Long userId = notificationDetails.getUser().getId();
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + userId));
            notification.setUser(user);

            return notificationRepository.save(notification);
        }).orElseThrow(() -> new ResourceNotFoundException("Notification not found with id " + id));
    }

    public void deleteNotification(Long id) {
        notificationRepository.deleteById(id);
    }
}
