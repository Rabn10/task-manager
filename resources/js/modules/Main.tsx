import { Route, Routes } from "react-router-dom"
import SideNav from "./common/SideNav"
import React from "react"
import NavRoutes from "./routes/Routes"
const Main = () => {
    return (
        <>
            <div className="bg-gray-200 min-h-screen">
                <SideNav />
                <Routes>
                    {NavRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </div>
        </>
    )
}

export default Main;