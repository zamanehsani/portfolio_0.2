import { useState } from "react";

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

                <div className="hidden lg:flex items-center space-x-4">
                    <a href='https://docs.google.com/document/d/1XCN5gIPAq8sEJs9EP3Qan57FoqmQ8tZB-SOwr4ySURE/edit?usp=sharing' target="_blank" rel="noreferrer" 
                        className="flex items-center bg-green-800 rounded-md shadow-lg px-2 py-1 pl-3 text-white hover:text-slate-200 hover:bg-green-600 font-bold ">Resume
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </a>
                    <a href='https://linkedin.com/in/zamanehsani' target="_blank" rel="noreferrer" 
                        className="flex items-center text-green-800 hover:text-black font-bold ">LinkedIn
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </a>
                    <a href='https://github.com/zamanehsani' target="_blank" rel="noreferrer"   
                        className="flex items-center text-green-800 hover:text-black font-bold ">Github
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                        </a>
                    <a href='https://facebook.com/zamanehsani' target="_blank"  rel="noreferrer"  
                        className="flex items-center text-green-800 hover:text-black font-bold ">Facebook
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                        </a>
                    <a href='https://twitter.com/zamanehsani' target="_blank"   rel="noreferrer" 
                        className="flex items-center text-green-800 hover:text-black font-bold ">X 
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                        </a>
                    <a href='https://instagram.com/zaman_ehsani' target="_blank"   rel="noreferrer" 
                        className="flex items-center text-green-800 hover:text-black font-bold ">Instagram
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </a>
                    <a href='https://wa.me/+971566652534' target="_blank" rel="noreferrer" 
                        className="flex items-center text-sm bg-green-800 rounded-md shadow-lg px-2 py-1 text-white hover:text-slate-200 hover:bg-green-600 ">WhatsApp
                        <span className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </a>

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
                            <div className="flex">
                                <a href='https://docs.google.com/document/d/1XCN5gIPAq8sEJs9EP3Qan57FoqmQ8tZB-SOwr4ySURE/edit?usp=sharing' target="_blank" rel="noreferrer" 
                                    className="flex items-center justify-center bg-green-800 rounded-md shadow-lg px-4 py-1 pl-3 text-white hover:text-slate-200 hover:bg-green-600 font-bold ">Resume
                                    <span className="px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <a href='https://linkedin.com/in/zamanehsani' target="_blank"  rel="noreferrer"   
                                className="flex items-center text-xl text-green-900 hover:text-black font-bold ">LinkedIn 
                                <span className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                            </a>
                            <a href='https://github.com/zamanehsani' target="_blank"   rel="noreferrer"       
                                className="flex items-center text-xl text-green-900 hover:text-black font-bold ">Github 
                                <span className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </a>
                            <a href='https://facebook.com/zamanehsani' target="_blank"    rel="noreferrer"    
                                className="flex items-center text-xl text-green-900 hover:text-black font-bold ">Facebook 
                                <span className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                            </a>
                            <a href='https://twitter.com/zamanehsani' target="_blank"     rel="noreferrer"    
                                className="flex items-center text-xl text-green-900 hover:text-black font-bold ">Twetter - X 
                                <span className="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                            </a>
                            <a href='https://instagram.com/zaman_ehsani' target="_blank" rel="noreferrer"      
                                className="flex items-center text-xl text-green-900 hover:text-black font-bold ">Instagram 
                                <span className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </a>
                            <div className="flex">
                                <a href='https://wa.me/+971566652534' target="_blank" rel="noreferrer" 
                                    className="flex items-center bg-green-800 rounded-md shadow-lg px-2 py-1 pl-3 text-white hover:text-slate-200 hover:bg-green-600 ">WhatsApp
                                    <span className="px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
