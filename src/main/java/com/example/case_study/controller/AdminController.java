package com.example.case_study.controller;

import com.example.case_study.model.Users;
import com.example.case_study.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    IUserService iUserService;

    @GetMapping
    public ResponseEntity<List<Users>> findAllUser(){
        return new ResponseEntity<>(iUserService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> blockUser(@PathVariable("id") Long id){
        Optional<Users> users = iUserService.findById(id);
        if(users.isPresent()){
            users.get().setBlockStatus(false);
            iUserService.save(users.get());
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
