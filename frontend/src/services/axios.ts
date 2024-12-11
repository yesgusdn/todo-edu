import baseaxios, { AxiosInstance } from "axios";

const axios: AxiosInstance = baseaxios.create({
    baseURL: "http://localhost:8080/api/", // 기본 API URL
    timeout: 10000, // 요청 타임아웃 (10초)
    headers: {
        "Content-Type": "application/json",
    },
});

// 요청 인터셉터
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 (에러 처리 등)
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;
