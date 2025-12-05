import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';

interface Project {
    id: number;
    name: string;
    created_by: {
        name: string;
    }
}

interface GetProjectsResponse {
    projects: Project[];
}

const GET_PROJECT = gql`
    query {
        projects {
            id,
            name,
            created_by {
                name
            }
        }
    }
`;

const Project = () => {

    const { data } = useQuery<GetProjectsResponse>(GET_PROJECT);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        if (!data) return;
        setProjects(data.projects);
    }, [data?.projects]);

    console.log(projects);

    return (
        <div className="ml-64 p-8 flex flex-col gap-6 min-h-screen">

            {/* Header Section */}
            <div className="flex items-center justify-between">

                {/* Title */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
                    <p className="text-gray-500 mt-1">View and manage all your projects.</p>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search Bar */}
                    <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-lg px-4 h-12 w-80">
                        <FiSearch className="text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full outline-none bg-transparent"
                        />
                    </div>

                    {/* Add Button */}
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 h-12 rounded-lg font-semibold shadow-sm">
                        <IoAdd size={20} />
                        New Project
                    </button>

                </div>
            </div>


            {/* TABLE SECTION STARTS */}
            <div className='bg-white rounded-xl shadow-sm p-4 border border-gray-200'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr className='text-left text-gray-500 border-b'>
                            <td className='py-4 font-semibold'>S.N.</td>
                            <td className='py-4 font-semibold'>Project Name</td>
                            <td className='py-4 font-semibold'>Created By</td>
                            <td className='py-4 font-semibold'>Action</td>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {data?.projects.map((project, index) => (
                            <tr
                                key={project.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                {/* Serial Number */}
                                <td className="py-4">{index + 1}</td>

                                {/* Project Name */}
                                <td className="py-4">{project.name}</td>

                                {/* Description */}
                                <td className="py-4">{project.created_by.name}</td>

                                {/* Actions */}
                                <td className="py-4 flex gap-4">
                                    <button className="text-blue-600 hover:text-blue-700">Edit</button>
                                    <button className="text-red-600 hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default Project;
