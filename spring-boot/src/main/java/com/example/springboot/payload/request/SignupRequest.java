package com.example.springboot.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SignupRequest {
    private String userName;
    private String email;
    private String password;
    private Set<String> role;
}
