package com.kenny.sdeappbackend.service;

import com.kenny.sdeappbackend.exception.ResourceNotFoundException;
import com.kenny.sdeappbackend.model.Feedback;
import com.kenny.sdeappbackend.model.User;
import com.kenny.sdeappbackend.repo.FeedbackRepo;
import com.kenny.sdeappbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepository;

    @Autowired
    private UserRepo userRepository;

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(Long id) {
        return feedbackRepository.findById(id);
    }

    public Feedback createFeedback(Feedback feedback) {
        Long userId = feedback.getUser().getId();
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + userId));
        feedback.setUser(user);
        return feedbackRepository.save(feedback);
    }

    public Feedback updateFeedback(Long id, Feedback feedbackDetails) {
        return feedbackRepository.findById(id).map(feedback -> {
            feedback.setContent(feedbackDetails.getContent());
            feedback.setRating(feedbackDetails.getRating());

            Long userId = feedbackDetails.getUser().getId();
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + userId));
            feedback.setUser(user);

            return feedbackRepository.save(feedback);
        }).orElseThrow(() -> new ResourceNotFoundException("Feedback not found with id " + id));
    }

    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}