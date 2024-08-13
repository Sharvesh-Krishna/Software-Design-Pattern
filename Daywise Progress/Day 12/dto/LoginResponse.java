package com.example.sdp.dto;

public class LoginResponse {
    private boolean success;

    public LoginResponse(boolean success) {
        this.success = success;
    }

    public boolean isSuccess() {
        return success;
    }

    // Getter
}
