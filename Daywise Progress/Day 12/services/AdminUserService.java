package com.example.sdp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sdp.models.AdminUser;
import com.example.sdp.repos.AdminUserRepo;

import java.util.List;

@Service
public class AdminUserService {

    @Autowired
    private AdminUserRepo adminUserRepository;

    public List<AdminUser> getAllAdminUsers() {
        return adminUserRepository.findAll();
    }

    public AdminUser getAdminUserById(Long id) {
        return adminUserRepository.findById(id).orElse(null);
    }

    public AdminUser addAdminUser(AdminUser adminUser) {
        return adminUserRepository.save(adminUser);
    }

    public AdminUser updateAdminUser(Long id, AdminUser adminUserDetails) {
        AdminUser adminUser = adminUserRepository.findById(id).orElse(null);
        if (adminUser != null) {
            adminUser.setInvoice(adminUserDetails.getInvoice());
            adminUser.setPaymentStatus(adminUserDetails.getPaymentStatus());
            adminUser.setUserClass(adminUserDetails.getUserClass());
            adminUser.setHours(adminUserDetails.getHours());
            adminUser.setTotalAmount(adminUserDetails.getTotalAmount());
            return adminUserRepository.save(adminUser);
        }
        return null;
    }

    public void deleteAdminUser(Long id) {
        adminUserRepository.deleteById(id);
    }
}
