import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ADD_USER = gql`
    mutation register($input: RegisterInput!) {
        register(input: $input){
            id
            name
            email
        }
    }
`;
const Register = () => {

    const navigate = useNavigate();
    const [user, SetUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [addUserMutation] = useMutation(ADD_USER);

    const addUser = async (e: any) => {
        e.preventDefault();
        try {
            const res = await addUserMutation({
                variables: {
                    input: {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        password_confirmation: user.password_confirmation
                    }
                }
            });
            SetUser({
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            });
            navigate('/');
        } catch (error) {
            console.log(error);
            // return error.graphQLErrors.map((err) => {
            //     return err.message
            // })
        }
    }


    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-[#f8f9fc] p-4'>
            <div className='w-full max-w-md flex flex-col items-center'>
                <div className="flex flex-col items-center mb-8">
                    <h1 className='text-[28px] font-semibold text-[#0d121b] text-center'>
                        Create your account
                    </h1>
                </div>

                <div className='bg-white shadow-sm rounded-xl w-full p-7'>
                    <form className='flex flex-col gap-5' onSubmit={addUser}>
                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium text-[#0d121b] mb-1'>
                                Name
                            </label>
                            <input
                                type='name'
                                placeholder='Enter your name'
                                value={user.name}
                                onChange={(e) => SetUser({ ...user, name: e.target.value })}
                                className='border border-[#d5dceb] h-12 rounded-lg px-4 text-[15px] placeholder:text-[#8d9bb9] focus:ring-2 focus:ring-[#135bec33] outline-none'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium text-[#0d121b] mb-1'>
                                Email
                            </label>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                value={user.email}
                                onChange={(e) => SetUser({ ...user, email: e.target.value })}
                                className='border border-[#d5dceb] h-12 rounded-lg px-4 text-[15px] placeholder:text-[#8d9bb9] focus:ring-2 focus:ring-[#135bec33] outline-none'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium text-[#0d121b] mb-1'>
                                Password
                            </label>

                            <div className='relative'>
                                <input
                                    type='password'
                                    placeholder='Enter your password'
                                    value={user.password}
                                    onChange={(e) => SetUser({ ...user, password: e.target.value })}
                                    className="border border-[#d5dceb] h-12 rounded-lg w-full px-4 pr-12 text-[15px] placeholder:text-[#8d9bb9] focus:ring-2 focus:ring-[#135bec33] outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8d9bb9]"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        visibility
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-[14px] font-medium text-[#0d121b] mb-1'>
                                Confirm Password
                            </label>

                            <div className='relative'>
                                <input
                                    type='password'
                                    placeholder='Enter your password'
                                    value={user.password_confirmation}
                                    onChange={(e) => SetUser({ ...user, password_confirmation: e.target.value })}
                                    className="border border-[#d5dceb] h-12 rounded-lg w-full px-4 pr-12 text-[15px] placeholder:text-[#8d9bb9] focus:ring-2 focus:ring-[#135bec33] outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8d9bb9]"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        visibility
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end mt-[-4px]">
                            <button
                                type="submit"
                                // onClick={addUser}
                                className="w-full h-12 bg-[#135bec] text-white rounded-lg text-[16px] font-medium hover:bg-[#0f4ecc] transition"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-sm text-[#7b8ab1]">
                            Already have an account?{" "}
                            <Link to="/" className="text-[#135bec] font-medium hover:underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;