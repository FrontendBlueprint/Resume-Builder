import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full shadow-md font-[Poppins]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-primary">
              Resume-Builder
            </div>

            {/* Desktop Nav Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium ">
              <a
                href="/dashboard"
                className="hover:text-secondary transition-colors duration-300"
              >
                Create Resume
              </a>
              <a
                href="/dashboard"
                className="hover:text-secondary transition-colors duration-300"
              >
                Update Resume
              </a>
              <a
                href="/dashboard"
                className="hover:text-secondary transition-colors duration-300"
              >
                Dashboard
              </a>
            </div>

            {/* CTA Button (hidden on mobile) */}
            <div className="hidden md:block">
              <a
                href="/dashboard"
                className="border border-primary text-secondary px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Build My Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    className="h-8 w-18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu (shown when isOpen is true) */}
          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col">
                <a
                  href="/dashboard"
                  className="block bg-third my-3 py-3 px-3 rounded-md text-base font-medium text-white hover:text-secondary"
                >
                  Create Resume
                </a>
                <a
                  href="/dashboard"
                  className="block bg-third my-3 py-3 px-3 rounded-md text-base font-medium text-white hover:text-secondary"
                >
                  Update Resume
                </a>
                <a
                  href="/dashboard"
                  className="block bg-third my-3 py-3 px-3 rounded-md text-base font-medium text-white hover:text-secondary"
                >
                  Dashboard
                </a>
                <a
                  href="/dashboard"
                  className="block bg-primary my-3 py-3 px-3 rounded-md text-base font-medium text-white hover:text-secondary"
                >
                  Build My Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
