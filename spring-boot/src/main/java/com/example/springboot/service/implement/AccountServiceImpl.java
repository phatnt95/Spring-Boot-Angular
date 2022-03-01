package com.example.springboot.service.implement;

import com.example.springboot.model.Account;
import com.example.springboot.repository.AccountRepository;
import com.example.springboot.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Optional<Account> findAccountByName(String name) {
        return null;
    }

    @Override
    public Account getAccountByUsername(String userName) {
        return null;
    }
}
