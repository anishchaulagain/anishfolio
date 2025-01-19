import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white flex items-center justify-center">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">


                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2025. All rights reserved. Dev: Anish Chaulagain
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer