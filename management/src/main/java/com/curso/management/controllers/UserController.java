package com.curso.management.controllers;

import com.curso.management.model.User;
import com.curso.management.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers(){
        List<User> users = repository.findAll();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/users/post")
    @CrossOrigin(origins = "http://localhost:8081")
    public ResponseEntity<User> saveUsers(
            @RequestBody User user){
        User savedUser = repository.save(user);
        return new ResponseEntity<User>(
                savedUser,
                HttpStatus.CREATED);
    }


    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> removeUser(
            @PathVariable("id") long id){
        repository.deleteById(id);
        return new ResponseEntity<>(
                HttpStatus.OK
        );
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable("id") long id,
            @RequestBody User user){
        user.setId(id);
        repository.save(user);
        return new ResponseEntity<User>(
                user,
                HttpStatus.OK
        );
    }
}
