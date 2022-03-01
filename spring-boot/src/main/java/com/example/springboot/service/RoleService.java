package com.example.springboot.service;

import com.example.springboot.model.Role;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface RoleService {
    public Optional<Role> findAllRole();
}
