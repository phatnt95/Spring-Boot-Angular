package com.example.springboot.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Role extends AbstractModel{
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;
}
