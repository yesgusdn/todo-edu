import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api/AuthApiService";
import Button from "../../components/Button/Button";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            const { token } = response.data;

            localStorage.setItem("authToken", token);
            navigate("/home");
        } catch (error) {
            console.error("Login failed:", error);
            setError(error);
        }
    };

    return (
        <div className="flex w-full h-full min-h-screen items-center justify-center bg-gray-100">
            <div className="flex flex-col w-full max-w-md mx-auto space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <Button onClick={handleLogin}>로그인</Button>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Login;
