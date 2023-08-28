"use client";
import Image from "next/image";
import React, { useState } from "react";
import Img from "/public/logo.png";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  // const [open, setOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    alert("open")
  }

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {

  //   setIsMobileMenuOpen(!isMobileMenuOpen);

  // };
  return (
    // <div className="navbar w-full bg-[#C10A39] text-white shadow-xl">
    //   <div className="container mx-auto flex items-center justify-between p-[20px] h-[72px] top-[30px]">
    //     <div className="logo flex items-center">
    //     <Image src={Img}  width={150} height={100} alt="logo" />
    //     </div>
    //     <div className="nav gap-12 flex items-center justify-between text-xl font-medium">
    //       <span className="cursor-pointer">टॉप न्यूज़</span>
    //       <span className="cursor-pointer">सामाजिक</span>
    //       <span className="cursor-pointer">धार्मिक</span>
    //       <span className="cursor-pointer">शेक्शनिक</span>
    //       <span className="cursor-pointer">अन्य</span>
    //     </div>
    //     <div className="menu">
    //       <Hamburger size={22}/>
    //       </div>
    //   </div>
    // </div>

    <>
      <nav className="w-full bg-[#C10A39] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <Image src={Img} width={150} height={100} alt="logo" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <a href="#">टॉप न्यूज़</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/">सामाजिक</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/">धार्मिक</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/">शेक्शनिक</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/">अन्य</a>
                </li>
              </ul>

              {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <a
                        href="/"
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="/"
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a>
                </div> */}
              <div className="mt-3 space-y-2 lg:hidden md:inline-block border-white rounded-md " onClick={handleClick}>
                <Hamburger size={22} color="white" />
              </div>
            </div>
          </div>
          {/* <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="/"
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </a>
                    <a
                        href="/"
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </a>
                </div> */}
          <div className="menu hidden space-x-2 md:inline-block" onClick={handleClick}>
            <Hamburger
              size={22}
              color="white"
            
            />
            {open && <div className="top-32 w-36 h-20 bg-white" onClick={()=> open}></div>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
