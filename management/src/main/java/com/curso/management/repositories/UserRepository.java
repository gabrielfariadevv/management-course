package com.curso.management.repositories;

import com.curso.management.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
                 extends JpaRepository<User, Long> {
}
