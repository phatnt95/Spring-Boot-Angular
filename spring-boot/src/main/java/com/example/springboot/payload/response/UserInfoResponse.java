package com.example.springboot.payload.response;

import lombok.*;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class UserInfoResponse {
    private Long id;
    private String userName;
    private String email;
    private Set<String> role;

    public static class UserInfoResponseBuilder {
        public UserInfoResponseBuilder(){

        }
    }
}
