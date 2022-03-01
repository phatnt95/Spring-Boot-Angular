package com.example.springboot.service.implement;

import com.example.springboot.model.Role;
import com.example.springboot.service.RoleService;

import java.util.Optional;

public class RoleServiceImpl implements RoleService {
    @Override
    public Optional<Role> findAllRole() {
        return Optional.empty();
    }
}
