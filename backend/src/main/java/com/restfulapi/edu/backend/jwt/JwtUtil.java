package com.restfulapi.edu.backend.jwt;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {
	
    
    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512); // Key 객체 생성
    private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
	
    public String createToken(String username) {
	    return Jwts.builder()
	    		.setSubject(username)
	    		.setIssuedAt(new Date())
	    		.setExpiration(new Date(new Date().getTime() + JWT_TOKEN_VALIDITY * 100))
	    		.signWith(SECRET_KEY)
	    		.compact();
	    }
    
    public String extractUsername(String token) {
    	return Jwts.parserBuilder()
    			.setSigningKey(SECRET_KEY)
    			.build()
    			.parseClaimsJws(token)
    			.getBody()
    			.getSubject();
    }
    
    public boolean validateToken(String token) {
    	try {
    		Jwts.parserBuilder()
    		.setSigningKey(SECRET_KEY)
    		.build()
    		.parseClaimsJws(token);
    		return true;
    	}
    	catch(JwtException e){
    		return false;
    	}
    }
    
}
