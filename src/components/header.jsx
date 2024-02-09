import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => { setMenu(!menu)};

    return (
        <div className="bg-green-300 bg-gradient-to-r from-green-300 via-green-300 to-green-300 shadow-lg">
            <div className="container mx-auto">
                <div className="flex items-center justify-between p-4">
                    <div className="flex">
                        <h1 className="ml-4 lg:ml-0 font-bold text-green-900 text-4xl">Zaman Ehsani</h1>
                    </div>
            
                <div className="flex-grow "></div>

                <div className="hidden lg:flex items-center space-x-6">
                    
                    <Link to={'/'} className="text-xl text-gray-700 hover:text-gray-900 ">Home</Link>
                    <Link to={'/experiences'} className="text-xl text-gray-700 hover:text-gray-900 ">Experience</Link>
                    <Link to={'/contact'} className="text-xl text-gray-700 hover:text-gray-900 ">Contact</Link>
                    <Link to={'/blog'} className="text-xl text-gray-700 hover:text-gray-900 ">Blogs</Link>
                </div>

                {/* <!-- Mobile menu icon (shown on small screens) --> */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu}  className="text-gray-700 hover:text-gray-900">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                    {/* Off-screen menu */}
                    <div className={`fixed inset-y-0 right-0 bg-green-300 w-80 p-3 
                                transform lg:hidden transition-transform duration-300  z-20
                                ease-in-out ${menu ? 'translate-x-0':'translate-x-full'}`}>

                        {/* Header */}
                        <div className="flex items-center justify-between p-3">
                            <h1 className="font-bold text-green-800 text-3xl">Zaman Ehsani</h1>
                            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                
                        {/* Menu items */}
                        <div className="flex flex-col space-y-4 px-4">
                            <Link onClick={toggleMenu} to={'/'} className="text-xl text-gray-700 hover:text-gray-900 ">Home</Link>
                            <Link onClick={toggleMenu} to={'/experiences'} className="text-xl text-gray-700 hover:text-gray-900 ">Experience</Link>
                            <Link onClick={toggleMenu} to={'/contact'} className="text-xl text-gray-700 hover:text-gray-900 ">Contact</Link>
                            <Link onClick={toggleMenu} to={'/blog'} className="text-xl text-gray-700 hover:text-gray-900 ">Blogs</Link>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
