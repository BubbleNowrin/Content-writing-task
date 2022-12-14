import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/images/te-logo-BFBBD56173-seeklogo.com.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div class="bg-gray-900">

                <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

                    <div class="relative flex items-center justify-between">
                        <label
                            htmlFor="my-drawer-2"

                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline lg:hidden"

                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </label>
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center"
                        >
                            <img src={logo}
                                class="w-8 text-teal-accent-400"
                                alt=""
                            />


                            <span class="ml-2 text-xl font-bold tracking-wide text-red-600 uppercase">
                                Teckturt
                            </span>
                        </a>
                        <ul class="flex items-center hidden space-x-8 lg:flex">


                            <li>
                                <Link
                                    to="/home"
                                    aria-label="Product pricing"
                                    title="Product pricing"
                                    class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    aria-label="About us"
                                    title="About us"
                                    class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        <ul class="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <a href="#_" class="relative px-5 py-2 font-medium text-white group">
                                    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
                                    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
                                    <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
                                    <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
                                    <span class="relative">Log Out</span>
                                </a>
                            </li>
                        </ul>
                        <div class="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div class="absolute top-0 left-0 w-full z-10">
                                    <div class="p-5 bg-white border rounded shadow-sm">
                                        <div class="flex items-center justify-between mb-4">
                                            <div>
                                                <Link
                                                    to="/"
                                                    aria-label="Company"
                                                    title="Company"
                                                    class="inline-flex items-center"
                                                >
                                                    <img src={logo}
                                                        class="w-8 text-teal-accent-400"
                                                        alt=""
                                                    />

                                                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                        Teckturt
                                                    </span>
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul class="space-y-4">

                                                <li>
                                                    <Link
                                                        to="/home"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/profile"
                                                        aria-label="About us"
                                                        title="About us"
                                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#_" class="relative px-5 py-2 font-medium text-white group">
                                                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
                                                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
                                                        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
                                                        <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
                                                        <span class="relative">Log Out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;