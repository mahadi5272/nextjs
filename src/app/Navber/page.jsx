"use client";

import { auth } from "@/firebase/firebase.init";
import useAuth from "@/Hook/useAuth";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // ⭐ Step-1: import

const Navber = () => {
  const { handlesignOut, user } = useAuth();
  const pathname = usePathname(); // ⭐ Step-2: get current route

  const handleSignOut = (e) => {
    e.preventDefault();
    handlesignOut();
  };

  // ⭐ Step-3: function for active class
  const activeClass = (path) =>
    pathname === path
      ? "text-orange-600 font-bold underline"
      : "hover:text-orange-500";

  const linksBefor = (
    <>
      <li>
        <Link href="/" className={activeClass("/")}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/AllProduct" className={activeClass("/AllProduct")}>
          All Product
        </Link>
      </li>

      <li>
        <Link href="#contact" className={activeClass("#contact")}>
          Contact
        </Link>
      </li>

      <li>
        <Link href="/SignUp" className={activeClass("/SignUp")}>
          SignUp
        </Link>
      </li>
    </>
  );

  const linksAfter = (
    <>
      <li>
        <Link href="/" className={activeClass("/")}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/AllProduct" className={activeClass("/AllProduct")}>
          All Product
        </Link>
      </li>

      <li>
        <Link href="#contact" className={activeClass("#contact")}>
          Contact
        </Link>
      </li>

      <li className="dropdown">
        <label tabIndex={0} className="btn">
          Button
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link
              href="/add-product"
              className={activeClass("/add-product")}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link href="/myProfile">
              MyProfile
            </Link>
          </li>

          <li>
            <Link
              href="/manage-product"
              className={activeClass("/manage-product")}
            >
              Manage Products
            </Link>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-orange-300 to-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {user ? linksAfter : linksBefor}
          </ul>
        </div>

        <Link href="/">
          <img
            className="h-13 w-13 rounded-full"
            src="https://i.ibb.co.com/PsZH8Zfd/pexels-buselliyy-29200640.jpg"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? linksAfter : linksBefor}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            LogOut
          </button>
        ) : (
          <Link href="/SignIn" className="btn">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
