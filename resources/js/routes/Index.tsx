import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../modules/auth/AuthLayout";
import React from "react";

const MainRoutes = () => {

    const token = sessionStorage.getItem("token");
    const isLogin = token !== null;
    return (
        <Routes>
            <Route path="/*"
                element={!isLogin ? <AuthLayout /> : <Navigate to="/dashboard" replace />} />
        </Routes>
    );
};

export default MainRoutes;