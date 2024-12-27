import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/api/AuthApiService";
import Button from "../../components/Button/Button";
import SmallButton from "../../components/Button/SmallButton";

const Signup = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async () => {
        if (!username || !password || !password2) {
            setError("필수입력");
            return;
        }
        if (password !== password2) {
            setError("비밀번호가 일치하지 않습니다.");
            inputRef.current.focus();
            return;
        }
        try {
            const response = await signup(username, password);
            console.log(response);
            navigate("/login");
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md">
                <h2>회원가입</h2>
            </div>
            <div className="flex flex-row w-full max-w-md justify-between">
                <p>기본정보</p>
                <p className="text-rose-500">필수사항</p>
            </div>

            <div className="flex flex-col w-full max-w-md space-y-2">
                <input
                    type="text"
                    value={username}
                    placeholder="아이디"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />

                <input
                    required
                    type="password"
                    value={password}
                    placeholder="비밀번호"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                    ref={inputRef}
                    type="password"
                    value={password2}
                    placeholder="비밀번호확인"
                    onChange={(e) => setPassword2(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                {error ? <div>{error}</div> : <></>}
            </div>
            <div className="flex flex-row w-full max-w-md justify-between mt-3">
                <p>전화번호</p>
                <p className="text-rose-500">필수사항</p>
            </div>
            <div className="flex flex-row w-full max-w-md justify-start space-x-1">
                <input
                    type="text"
                    maxLength={4}
                    className="p-3 border border-gray-300 rounded-lg w-3/4"
                    placeholder="휴대폰 번호(숫자만 입력)"
                />
                <div className="w-1/4">
                    <SmallButton>인증</SmallButton>
                </div>
            </div>

            <div className="w-full max-w-md my-2">
                <Button onClick={handleSignup}>회원가입</Button>
            </div>
        </div>
    );
};

export default Signup;
