package com.kenny.sdeappbackend.service;

import com.kenny.sdeappbackend.exception.ResourceNotFoundException;
import com.kenny.sdeappbackend.model.Resource;
import com.kenny.sdeappbackend.model.User;
import com.kenny.sdeappbackend.repo.ResourceRepo;
import com.kenny.sdeappbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {

    @Autowired
    private ResourceRepo resourceRepository;

    @Autowired
    private UserRepo userRepository;

    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    public Optional<Resource> getResourceById(Long id) {
        return resourceRepository.findById(id);
    }

    public Resource createResource(Resource resource) {
        Long managerId = resource.getManager().getId();
        User manager = userRepository.findById(managerId)
                .orElseThrow(() -> new ResourceNotFoundException("Manager not found with id " + managerId));
        resource.setManager(manager);
        return resourceRepository.save(resource);
    }

    public Resource updateResource(Long id, Resource resourceDetails) {
        return resourceRepository.findById(id).map(resource -> {
            resource.setName(resourceDetails.getName());
            resource.setType(resourceDetails.getType());

            Long managerId = resourceDetails.getManager().getId();
            User manager = userRepository.findById(managerId)
                    .orElseThrow(() -> new ResourceNotFoundException("Manager not found with id " + managerId));
            resource.setManager(manager);

            return resourceRepository.save(resource);
        }).orElseThrow(() -> new ResourceNotFoundException("Resource not found with id " + id));
    }

    public void deleteResource(Long id) {
        resourceRepository.deleteById(id);
    }
}
