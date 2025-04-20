package com.sampattitech.userservice.dto;

import com.sampattitech.userservice.model.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRegistrationRequest {
    private String fullName;
    private String email;
    private String password;
    private Role role;
}
