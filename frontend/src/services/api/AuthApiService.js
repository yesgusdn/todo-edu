import axios from "../axios";

export const login = (username, password) =>
    axios.post("http://localhost:8080/api/auth/login", { username, password });

export const signup = (username, password) =>
    axios.post("http://localhost:8080/api/auth/signup", { username, password });
