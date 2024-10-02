import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../Store/authUser";
import { LogOut, Menu, Search } from "lucide-react";
import { useContentStore } from "../Store/Content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const { user, logout } = useAuthStore();
const { setContentType} =useContentStore();
 



  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 ">
      <div className="flex items-center gap-10  z-50">
        <Link to={"/"}>
          <img
            src="/netflix-logo.png"
            alt="netflix-logo"
            className="w-32 sm:w-40"
          />
        </Link>
        <div className="hidden sm:flex gap-4 items-center">
          <Link to='/' className="hover:underline" onClick={()=>setContentType("movie")}>
            Movies
          </Link>
          <Link to='/' className="hover:underline" onClick={()=>setContentType("tv")}>
            Tv Shows
          </Link>
          <Link to="/history" className="hover:underline"  >
            Search History
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center z-50">
        {/* <div
          className={`flex items-center border border-gray-400 rounded-full p-2 transition-all duration-300 ease-in-out ${
            isExpanded ? "w-96" : "w-64"
          }`}>
          <input
            type="text"
            className="bg-transparent focus:outline-none text-gray-700 px-4  "
            placeholder="Search..."
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div> */}

        <Link to={"/search"} >
           <Search className="size-6 cursor-pointer" />
        </Link>
        <img
          src={user.image}
          alt="Avatar"
          className="h-8 rounded cursor-pointer"
        />
        <LogOut className="size-6 cursor-pointer hidden sm:flex" onClick={logout} />
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer " onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* mobile navbar */}

      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black/50 border rounded border-grey-800">
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}>
            Movies
          </Link>
          <Link
            to={"/"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}>
            Tv Shows
          </Link>
          <Link
            to={"/history"}
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}>
            Search History
          </Link>
          <Link
            to={"/logout"}
            className="flex gap-2  hover:underline p-2"
            onClick={toggleMobileMenu}>
           Logout   <LogOut className="size-5 cursor-pointer " />
          </Link>
       
        
        </div>
      )}
    </header>
  );
};

export default Navbar;
