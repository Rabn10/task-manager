import React from "react";
import { NavLink } from "react-router-dom";
// import {
//     HiOutlineViewGrid,
//     HiOutlineCheckCircle,
//     HiOutlineFolder,
//     HiOutlineChartBar,
//     HiOutlineCog
// } from "react-icons/hi";

const SideNav = () => {
    const SidenavTabs = [
        { name: "Dashboard", link: "/dashboard", },
        { name: "My Tasks", link: "/task", },
        { name: "Projects", link: "/project", },
        { name: "Analytics", link: "/analytics", },
        { name: "Settings", link: "/settings" },
    ];

    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-6">

            {/* Logo / Title */}
            <div>
                <h1 className="text-xl font-semibold mb-10">Task Manager</h1>

                {/* Navigation */}
                <nav className="flex flex-col space-y-2">
                    {SidenavTabs.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.link}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all
                        ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`
                            }
                        >
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Bottom Profile Section */}
            <div className="flex items-center gap-3 pb-4">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="rounded-full w-10 h-10"
                />
                <div>
                    <p className="text-gray-800 font-medium">John Doe</p>
                </div>
            </div>

        </div>

    );
};

export default SideNav;
