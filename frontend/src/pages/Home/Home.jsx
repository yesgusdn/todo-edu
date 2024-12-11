import axios from "../../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHelloWorldPathVariable } from "../../services/api/HelloWorldApiService";

const Home = () => {
    const [result, setResult] = useState("");
    const [pathValue, setPathValue] = useState("");
    const navigate = useNavigate();

    // api test
    const callApi = async () => {
        try {
            const response = await axios.get("hello-world");
            setResult(response.data);
        } catch (error) {
            console.error("api failed:", error);

            navigate("/error");
        }
    };

    const callPathApi = async () => {
        try {
            const response = await getHelloWorldPathVariable(pathValue);
            setResult(response.data);
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <input
                type="text"
                value={pathValue}
                onChange={(e) => setPathValue(e.target.value)}
                placeholder="임의전송path"
                class="w-40 p-3 border border-gray-300 rounded-lg"
            />
            <button
                className="w-40 m-2 p-3 font-semibold rounded-lg shawdow-md text-white bg-blue-500 hover:bg-blue-700"
                onClick={callApi}
            >
                Call API
            </button>
            <button
                onClick={callPathApi}
                className="w-40 p-3 font-semibold rounded-lg shawdow-md text-white bg-green-500 hover:bg-green-700"
            >
                Call PATH API
            </button>
            {result && <p>{result}</p>}
        </div>
    );
};

export default Home;
