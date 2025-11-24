import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../modules/auth/AuthLayout";
import React from "react";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />} />
        </Routes>
    );
};

export default MainRoutes;