"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

import React, { useState } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleAuth, setToggleAuth] = useState(false);

  return (
    <nav className="bg-blue-500 py-4 px-2 sm:px-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center flex-row justify-between">
        <div className="flex items-center justify-evenly w-full flex-row-reverse sm:flex-row sm:justify-between">
          <div className="w-full flex items-left sm:items-center pl-[6%] sm:pl-0">
            <Link href={"/"} className="text-white">
              LOGO
            </Link>
          </div>

          <div className="flex w-full relative">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-white flex cursor-pointer sm:hidden"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <ul className="hidden flex-row w-full space-x-6 justify-start sm:justify-end sm:flex">
              {status === "unauthenticated" ? (
                <>
                  <li className="">
                    <Link
                      href="/login"
                      className={`link text-white ${
                        pathname === "/login" ? "border-b-2 border-white" : ""
                      }`}
                    >
                      Login
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="/register"
                      className={`link text-white ${
                        pathname === "/register"
                          ? "border-b-2 border-white"
                          : ""
                      }`}
                    >
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    <Link
                      href="/"
                      className={`link text-white ${
                        pathname === "/" ? "border-b-2 border-white" : ""
                      }`}
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="/datalist"
                      className={`link text-white ${
                        pathname === "/datalist"
                          ? "border-b-2 border-white"
                          : ""
                      }`}
                    >
                      Data
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {toggleMenu && (
              <ul className="flex flex-col w-full absolute left-0 top-8 bg-white min-w-[140px] max-w-[170px] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg sm:hidden">
                {status === "unauthenticated" ? (
                  <>
                    <li className="transition bg-gray-100 p-2 hover:bg-blue-500 rounded hover:border hover:border-white hover:text-white w-full h-full">
                      <Link
                        href="/login"
                        className={`link ${
                          pathname === "/login"
                            ? "border-b-2 border-gray-400"
                            : ""
                        }`}
                      >
                        Login
                      </Link>
                    </li>

                    <li className="transition bg-gray-100 p-2 hover:bg-blue-500 rounded hover:border hover:border-white hover:text-white w-full h-full">
                      <Link
                        href="/register"
                        className={`link ${
                          pathname === "/register"
                            ? "border-b-2 border-gray-400"
                            : ""
                        }`}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="transition bg-gray-100 p-2 hover:bg-blue-500 rounded hover:border hover:border-white hover:text-white w-full h-full">
                      <Link
                        href="/"
                        className={`link ${
                          pathname === "/" ? "border-b-2 border-gray-400" : ""
                        }`}
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li className="transition bg-gray-100 p-2 hover:bg-blue-500 rounded hover:border hover:border-white hover:text-white w-full h-full">
                      <Link
                        href="/datalist"
                        className={`link ${
                          pathname === "/datalist"
                            ? "border-b-2 border-gray-400"
                            : ""
                        }`}
                      >
                        Data
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>

        {status === "authenticated" ? (
          <>
            <div className="relative">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-white ml-7 pointer"
                onClick={() => setToggleAuth(!toggleAuth)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              {toggleAuth && (
                <ul className="flex flex-col w-full absolute right-0 top-12 bg-white min-w-[140px] max-w-[170px] border border-gray-200 bg-gray-100 rounded rounded-xs shadow-lg">
                  <li className="transition bg-gray-100 p-2 hover:bg-blue-500 rounded hover:border hover:border-white hover:text-white w-full h-full">
                    <Link
                      href="/logout"
                      className={`link ${
                        pathname === "/logout"
                          ? "border-b-2 border-gray-400"
                          : ""
                      }`}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
