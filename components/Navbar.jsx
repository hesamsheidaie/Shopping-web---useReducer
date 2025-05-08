import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [MenuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen((mu) => !mu);
    };

    function handleLinkClick() {
        setMenuOpen(false);
    };

    return (
        <div className="bg-[#2d2d2d] border-b-2 border-t-2 w-full  lg:h-17 flex justify-between items-start pt-3 z-50 relative">
            <div className="hidden lg:flex pl-15">
                <h2 className="text-3xl font-medium text-amber-50 px-7 ">asos</h2>
                <Link to="/">
                    <button className="text-xl font-medium text-amber-50 px-7 border-x-1 cursor-pointer h-full hover:bg-[#514f4f] ">Home</button>
                </Link>
                <Link to="/WomanSection">
                    <button className="text-xl font-medium text-amber-50 px-7 border-x-1 cursor-pointer h-full hover:bg-[#514f4f] ">Woman</button>
                </Link>
                <Link to="/ManSection">
                    <button className="text-xl font-medium text-amber-50 px-7 border-x-1 cursor-pointer h-full hover:bg-[#514f4f] ">Man</button>
                </Link>
                <Link to="/About-us">
                    <button className="text-xl font-medium text-amber-50 px-7 border-x-1 cursor-pointer h-full hover:bg-[#514f4f] ">About us</button>
                </Link>
            </div>

            <div className="lg:hidden flex flex-col items-start pl-5 relative">
                <button onClick={toggleMenu} className="cursor-pointer h-full hover:bg-[#514f4f] z-50">
                    <img className="w-6 h-6 ml-6" src="src/assets/icons8-menu-50 (1).png" />
                </button>

                {MenuOpen && (
                    <div className="absolute top-9 left-0 flex flex-col items-start pl-6 text-xl rounded-b-2xl bg-[#2d2d2d] w-50 pb-4  shadow-lg">
                        <Link to="/" onClick={handleLinkClick} className="text-xl text-amber-50 py-2 w-full hover:bg-[#514f4f] px-4">Home</Link>
                        <Link to="/WomanSection" onClick={handleLinkClick} className="text-xl text-amber-50 py-2 w-full hover:bg-[#514f4f] px-4">Woman</Link>
                        <Link to="/ManSection" onClick={handleLinkClick} className="text-xl text-amber-50 py-2 w-full hover:bg-[#514f4f] px-4">Man</Link>
                        <Link to="/About-us" onClick={handleLinkClick} className="text-xl text-amber-50 py-2 w-full hover:bg-[#514f4f] px-4">About us</Link>
                    </div>
                )}
            </div>

            <div className="relative flex items-center">
                <Link to="/bag">
                    <button className="px-5 cursor-pointer h-full hover:bg-[#514f4f]">
                        <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                        </svg>
                    </button>
                </Link>
                <Link to="/Favorite">
                    <button className="px-5 cursor-pointer h-full hover:bg-[#514f4f]">
                        <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097a.985.985 0 0 0 1.486 0Z" />
                        </svg>
                    </button>
                </Link>
                <Link to="/">
                    <button className="px-5 cursor-pointer h-full hover:bg-[#514f4f]">
                        <svg className="lg:w-8 lg:h-8 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
