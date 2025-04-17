'use client';

import { ArrowLeftCircle, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false); // Controls the visibility of the sidebar
    const pathname = usePathname();

    const navigation = [
        { id: 1, title: 'HOME', href: '/' },
        { id: 2, title: 'ABOUT', href: '/about' },
        { id: 3, title: 'PROJECTS', href: '/projects' },
        { id: 4, title: 'SERVICES', href: '/services' },
        { id: 5, title: 'CERTIFICATIONS', href: '/certifications' },
    ];

    // Handles the sidebar toggle
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-white p-4 shadow-md z-[1000] transition-transform duration-300`}
        >
            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-center">
                        <h1 className="font-bold text-xl text-[#5c7af8]">
                            <Link href="/">PORTFOLIO</Link>
                        </h1>
                    </div>

                    {/* Middle Section */}
                    <div className="hidden md:block">
                        <nav aria-label="Global" className="font-bold">
                            <div className="flex items-center gap-6 md:gap-10 lg:gap-12 text-sm font-bold">
                                {navigation.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.id}
                                        className={`${pathname === item.href
                                                ? "font-semibold cursor-pointer text-[17px] text-[#5c7af8]"
                                                : "nav-link"
                                            }`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>


                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                      <Link href={'https://drive.google.com/file/d/1lGvsGpMWJF5-iOKZhDB2_lb67CMYyosO/view?usp=drive_link'}>  <button className="hidden sm:block bg-[#5c7af8] text-white px-4 py-2 rounded">
                            DOWNLOAD CV
                        </button></Link>

                        {/* Hamburger Button */}
                        <button
                            className="md:hidden z-[1100] text-[#5c7af8]"
                            onClick={handleNav}
                        >
                            {nav ? (
                                <ArrowLeftCircle className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 z-[1050] ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={handleNav}
            ></div>
            <div
                className={`fixed top-0 left-0 w-[60%] h-full bg-white border-r border-r-gray-900 transition-transform duration-500 ease-in-out z-[1100] ${nav ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <h1 className="w-full text-3xl font-bold text-[#5c7af8] mt-10 p-3">
                    <Link
                        href="/"
                        className="w-full mt-10 p-3 text-black font-primary font-bold text-xl ml-2 lg:ml-5 md:ml-3 md:text-2xl cursor-pointer border border-black rounded-md md:px-2 md:py-1 px-2 py-1"
                    >
                        Anish's
                        <span className="text-[#5c7af8] hover:text-yellow-500">
                            Portfolio
                        </span>
                    </Link>
                </h1>

                {/* Navigation Links */}
                <div className="p-3 flex flex-col gap-3">
                    {navigation.map((item) => (
                        <Link
                            href={item.href}
                            key={item.id}
                            className="p-4 border-b border-gray-600 text-black cursor-pointer hover:border-gray-800 font-semibold hover:text-[#5c7af8]"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
