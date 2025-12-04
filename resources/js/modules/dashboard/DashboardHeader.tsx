import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
const DashboardHeader = () => {
    return (
        <div className="ml-64 p-2 flex flex-col gap-6">
            <div className="flex item-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Manage your tasks efficiently.</p>
                </div>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold h-11">
                    <IoAdd size={20} />
                    Add New Task
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 w-full ">
                    <FiSearch className="text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for tasks"
                        className="w-full outline-none bg-transparent"
                    />
                </div>

                <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
                    <option>Filter by Priority</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
                    <option>Sort by Date</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                </select>
            </div>

        </div>


    );
}

export default DashboardHeader;