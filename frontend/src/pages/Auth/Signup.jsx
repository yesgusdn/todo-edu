import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/api/AuthApiService";

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        try {
            const response = await signup(username, password);
            console.log(response);
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
                    placeholder="아이디"
                    onChange={(e) => setUsername(e.target.value)}
                    class="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    value={password}
                    placeholder="비밀번호"
                    onChange={(e) => setPassword(e.target.value)}
                    class="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    value={password2}
                    placeholder="비밀번호확인"
                    onChange={(e) => setPassword2(e.target.value)}
                    class="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button
                    className="w-full p-3 font-semibold rounded-lg shawdow-md text-white bg-green-500 hover:bg-green-700"
                    onClick={handleSignup}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Signup;
