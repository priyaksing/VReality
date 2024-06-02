import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

function Navbar() {

    const [menuDrawerOpen, setMenuDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMenuDrawerOpen(!menuDrawerOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex flex-shrink-0 items-center">
                        <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                        <span className='text-xl tracking-tight'>VReality</span>
                    </div>

                    <ul className='hidden lg:flex ml-12 space-x-14'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className='hidden lg:flex space-x-12 justify-center items-center'>
                        <a href="#" className='border py-2 px-3 rounded-md'>
                            Sign In
                        </a>
                        <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                            Create an account
                        </a>
                    </div>

                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {menuDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {menuDrawerOpen && (
                    <div className='w-full p-12 fixed right-0 z-20 flex flex-col justify-center items-center bg-neutral-900 lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>

                        <div className='flex space-x-6 py-4'>
                            <a href="#" className='border py-2 px-3 rounded-md'>
                                Sign In
                            </a>
                            <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
