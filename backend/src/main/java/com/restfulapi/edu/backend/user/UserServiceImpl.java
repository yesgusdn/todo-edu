package com.restfulapi.edu.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	public User validateUser(String username, String password) {
		return userRepository.findByUsername(username);
	}
}
