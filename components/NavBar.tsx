import React from 'react';
import Link from 'next/link';
import LightLogo from './logos/VercelLogo';
import { Paths } from '../lib/paths';
import GitHubLogo from './logos/GitHubLogo';
import GitLabLogo from './logos/GitLabLogo';
import LinkedinLogo from './logos/LinkedinLogo';

function NavBar() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-3 px-6 mb-8">
        <Link href={Paths.HOME}>
          <div
            aria-label="Home"
            className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer"
          >
            <LightLogo size={130} className="mr-4" />
          </div>
        </Link>
        <div className="md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white"
            type="button"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex w-auto flex-grow items-center">
          <div className="text-sm flex-grow">
            <Link href="#">
              <a className="inline-block text-sm px-4 py-2 text-teal-100 leading-none rounded hover:text-white hover:bg-teal-400 mr-4">
                About
              </a>
            </Link>
            <Link href="#">
              <a className="inline-block text-sm px-4 py-2 text-teal-100 leading-none rounded hover:text-white hover:bg-teal-400 mr-4">
                Services
              </a>
            </Link>
            <Link href="#">
              <a className="inline-block text-sm px-4 py-2 text-teal-100 leading-none rounded hover:text-white hover:bg-teal-400 mr-4">
                Documentation
              </a>
            </Link>
          </div>
          <div className="md:mt-0 mt-2 pl-4">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/luke-shay">
              <div className="inline-block mr-4 cursor-pointer">
                <LinkedinLogo size={90} />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/LukeShay">
              <div className="inline-block mr-4 cursor-pointer">
                <GitHubLogo size={25} />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://gitlab.com/LukeShay">
              <div className="inline-block mr-4 cursor-pointer">
                <GitLabLogo size={25} />
              </div>
            </a>
          </div>
        </div>
      </nav>
      {open && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div
              className="rounded-lg bg-teal-500 shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu"
                    onClick={handleClick}
                  >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-teal-100 leading-none hover:text-white hover:bg-teal-400 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium  text-teal-100 leading-none hover:text-white hover:bg-teal-400 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium  text-teal-100 leading-none hover:text-white hover:bg-teal-400 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium  text-teal-100 leading-none hover:text-white hover:bg-teal-400 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
