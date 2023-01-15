import React, { useEffect, FC, ReactElement } from "react";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav: FC = (): ReactElement => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <BsHouse size={25} />

        <span className="font-semibold text-xl mx-3 tracking-tight">
          House Monitor
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>House Monitor</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black-100 text-lg hover:text-white mr-4"
          >
            Houses
          </a>
        </div>
        <div>
          {/* <Link
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            to="/login"
          >
            Log in
          </Link>  */}

          <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Log in
          </a>
        </div>
        <div>
          <a
            href="/signup"
            className="inline-block text-sm px-4 py-2 mx-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
