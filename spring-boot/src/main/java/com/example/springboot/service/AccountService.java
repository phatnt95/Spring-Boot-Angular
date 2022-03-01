package com.example.springboot.service;

import com.example.springboot.model.Account;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface AccountService {
    public Optional<Account> findAccountByName(String name);

    Account getAccountByUsername(String userName);
}
