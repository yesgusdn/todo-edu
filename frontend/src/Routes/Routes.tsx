import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// page
import Home from "../pages/Home/Home";
import Counter from "../pages/Counter/Counter";
import Login from "../pages/Auth/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Auth/Signup";
import Main from "../pages/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import StockInfo from "../pages/Stock/StockInfo";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <RouterRoutes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Main />} />

                <Route path="/stock/:stockCd" element={<StockInfo />} />

                <Route path="/home" element={<Home />} />
                <Route
                    path="/counter"
                    element={<ProtectedRoute children={<Counter />} />}
                />
                <Route path="/error" element={<ErrorPage />} />
            </RouterRoutes>
        </BrowserRouter>
    );
};

export default Routes;
