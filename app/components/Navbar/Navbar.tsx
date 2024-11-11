"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./css/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiAndroidLine } from "react-icons/ri";
import Image from "next/image";
import Head from "next/head";
import Button from "react-bootstrap/Button"; 
import { useRouter } from "next/navigation";
import { IoMdPerson } from "react-icons/io";
import {FaHeart, FaShare, FaSignOutAlt } from 'react-icons/fa'; 

const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const router = useRouter();
 
 
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="TenderWin" content="TenderWin" />
      </Head>

      <div className="sticky top-0 z-50 bg-white">
        <div className="container-fluid h-8 text-white bg-orange-600 flex items-center justify-between px-2">
          {/* Left Section */}
          <div className="flex items-center xl:ml-9">
            <RiAndroidLine className="  mr-2 text-xl" />
            <span className="">Get the App</span>
          </div>

          {/* Center Section */}

          <div className="flex-1 text-right xl:text-center xl:pl-28">
            <strong>Welcome to TenderWin !</strong>
            <span className="hidden md:inline">
              {" "}
              Wrap new tenders every single day.
            </span>
          </div>

          {/* <div className="flex-1 text-right">
            <strong className="">Welcome to TenderWin !</strong>
            <span className="hidden md:inline"> Wrap new tenders every single day.</span>
        </div> */}

          {/* Right Section */}
          <div className="text-right hidden md:flex xl:mr-9">
            <span className="">Bidding Solution: </span>
            +91 888-613-3955
          </div>
        </div>

        <nav className="bg-white">
          {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"> */}
          <div className="max-w-8xl mx-auto sm:px-6 lg:px-11">
            <div className="flex items-center justify-between h-12">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-shrink-0">
                  <Link
                    scroll={false}
                    href="/"
                    className="text-white text-lg font-bold"
                  >
                    <img
                      src="/images/logo/logo.png"
                      className="h-6"
                      alt="TenderWin Logo"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link   scroll={false}
                      href="/tenders-filter"
                      className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-md font-bold "
                    >
                      TENDERS
                    </Link>
                    <Link   scroll={false}
                      href="/competitior-analytics"
                      className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-md font-bold "
                    >
                      COMPETITORS ANALYTICS
                    </Link>
                    <Link   scroll={false}
                      href="/pricing-package"
                      className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-md font-bold "
                    >
                      PRICING
                    </Link>
                    <Link   scroll={false}
                      href="/contact-us"
                      className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-md font-bold "
                    >
                      CONTACT-US
                    </Link>
                   
                      <Link   scroll={false}
                      href="/signup"
                      className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-md font-bold "
                    >
                      SIGN UP / LOG IN
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}

          {/* <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1"> 
                    <Link href="/tenders-filter" className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold">TENDERS</Link>
                    <a href="#" className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold">COMPETITORS ANALYTICS</a>
                    <a href="#" className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold">GEM / BIDDING</a>
                    <a href="#" className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold">BID MANAGEMENT SYSTEM</a>
                    <a href="#" className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold">SIGN UP / LOG IN</a>
                </div>
            </div> */}

          <div
            id="mobile-menu"
            className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link   scroll={false}
                href="/tenders-filter"
                className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-orange-600"
              >
                TENDERS
              </Link>
              <Link   scroll={false}
                href="/competitior-analytics"
                className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-orange-600"
              >
                COMPETITORS ANALYTICS
              </Link>
              <Link   scroll={false}
                href="/pricing-package"
                className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-orange-600"
              >
                PRICING
              </Link>
              <Link   scroll={false}
                href="/contact-us"
                className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-orange-600"
              >
                CONTACT-US
              </Link>
             
                      <Link   scroll={false}
                      href="/signup"
                      className="no-underline text-gray-950 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:border-orange-600 flex items-center"
                    >
                      SIGN UP / LOG IN
                    </Link> 
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
