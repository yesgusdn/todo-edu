import axios from "../axios";

export const login = (username, password) =>
    axios.post("auth/login", { username, password });

export const signup = (username, password) =>
    axios.post("auth/signup", { username, password });
