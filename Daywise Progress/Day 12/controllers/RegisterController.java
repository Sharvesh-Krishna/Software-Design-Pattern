package com.example.sdp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.sdp.dto.RegisterRequest;
import com.example.sdp.dto.RegisterResponse;
import com.example.sdp.services.RegisterService;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        boolean success = registerService.registerEmployee(registerRequest);
        return ResponseEntity.ok().body(new RegisterResponse(success));
    }
}
