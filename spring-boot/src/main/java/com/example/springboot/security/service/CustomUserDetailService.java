package com.example.springboot.security.service;

import com.example.springboot.model.Account;
import com.example.springboot.model.UserPrincipal;
import com.example.springboot.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    AccountRepository accountRepo;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepo.findByUserName(username)
                .orElseThrow (() ->
                        new UsernameNotFoundException("Not found account with username: " + username));

        return UserPrincipal.create(account);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        Account account = accountRepo.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id " + id));
        return UserPrincipal.create(account);
    }
}
