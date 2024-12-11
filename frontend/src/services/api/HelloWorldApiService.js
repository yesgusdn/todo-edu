// helloWorld API

import axios from "../axios";

export const getHelloWorldPathVariable = (username) =>
    axios.get(`hello-world/path-variable/${username}`);
