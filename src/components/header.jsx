import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => { setMenu(!menu)};

    return (
        <div className="shadow">
            <div className="container mx-auto">
                <div className="flex items-center justify-between p-4">
                    <div className="flex">
                        <h1 className="ml-4 lg:ml-0 font-bold text-green-900 text-4xl">Zaman Ehsani</h1>
                    </div>
            
                <div className="flex-grow "></div>

                <div className="hidden lg:flex items-center space-x-6">
                    <Link to={'https://linkedin.com/in/zamanehsani'} 
                        className="text-xl text-green-800 hover:text-black font-bold ">LinkedIn</Link>
                    <Link to={'https://github.com/zamanehsani'}      
                        className="text-xl text-green-800 hover:text-black font-bold ">Github</Link>
                    <Link to={'https://facebook.com/zamanehsani'}    
                        className="text-xl text-green-800 hover:text-black font-bold ">Facebook</Link>
                    <Link to={'https://twitter.com/zamanehsani'}     
                        className="text-xl text-green-800 hover:text-black font-bold ">Twitter - X</Link>
                    <Link to={'https://instagram.com/zaman_ehsani'}  
                        className="text-xl text-green-800 hover:text-black font-bold ">Instagram</Link>
                </div>

                {/* <!-- Mobile menu icon (shown on small screens) --> */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu}  className="text-gray-700 hover:text-gray-900">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                    {/* Off-screen menu */}
                    <div className={`fixed inset-y-0 right-0 bg-yellow-200 w-72 p-3 
                                transform lg:hidden transition-transform duration-300  z-20
                                ease-in-out ${menu ? 'translate-x-0':'translate-x-full'}`}>

                        {/* Header */}
                        <div className="flex items-center justify-between p-3">
                            <h1 className="font-extrabold text-green-900 text-3xl">Zaman Ehsani</h1>
                            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
                                <svg className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mx-2">
                            <span className="text-green-800 break-words">Connect with me on social media platforms. DMs are open</span>
                        </div>
                
                        {/* Menu items */}
                        <div className="flex flex-col space-y-6 px-4 mt-6">
                        <Link to={'https://linkedin.com/in/zamanehsani'} 
                            className="text-xl text-green-900 hover:text-black font-bold ">LinkedIn</Link>
                        <Link to={'https://github.com/zamanehsani'}      
                            className="text-xl text-green-900 hover:text-black font-bold ">Github</Link>
                        <Link to={'https://facebook.com/zamanehsani'}    
                            className="text-xl text-green-900 hover:text-black font-bold ">Facebook</Link>
                        <Link to={'https://twitter.com/zamanehsani'}     
                            className="text-xl text-green-900 hover:text-black font-bold ">Twitter - X</Link>
                        <Link to={'https://instagram.com/zaman_ehsani'}  
                            className="text-xl text-green-900 hover:text-black font-bold ">Instagram</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
