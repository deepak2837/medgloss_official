"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import MedglossLogo from "./Medgloss";
import Image from "next/image";
import useAuthStore from "@/store/authStore";
import { toast } from "react-toastify";

const pages = [
  { name: "Question Bank", path: "/question-bank" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Previous Year Papers", path: "/pyq" },
  { name: "Mock Tests", path: "/mock-test" },
  { name: "Virtual Surgery", path: "/virtual-surgery" },
];

const settings = [
  { label: "Profile", link: "/profile" },
  { label: "My Records", link: "/records" },
  { label: "Logout", link: "/" },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  const toggleNavMenu = () => setIsNavOpen((prev) => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);

  const handleLogout = async () => {
    await logout();
    toast.success("Logout Successfully.");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-main rounded-b-2xl shadow-md">
      <div className="p-2">
        <div className="flex justify-between items-center py-2">
          <Link href="/" passHref className="no-underline">
            <div className="ml-2">
              <MedglossLogo />
            </div>
          </Link>

          <div className="hidden md:flex flex-grow justify-center">
            {pages.map(({ name, path }) => (
              <Link key={name} href={path} passHref className="no-underline">
                <button className="my-2 mx-1 text-white block rounded-xl border border-white px-4 py-2 transition-colors">
                  {name}
                </button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={toggleUserMenu} className="p-0">
                  <Image
                    src="/doctor.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-10 w-48 bg-white rounded-lg shadow-lg z-10">
                    {settings.map(({ label, link }) => (
                      <Link
                        key={label}
                        href={link}
                        passHref
                        className="no-underline"
                      >
                        <div
                          onClick={
                            label === "Logout" ? handleLogout : toggleUserMenu
                          }
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                        >
                          {label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" passHref className="no-underline">
                  <button className="text-white rounded-xl border border-white px-4 py-2 transition-colors">
                    Login
                  </button>
                </Link>
                <Link href="/register" passHref className="no-underline">
                  <button className="text-white rounded-xl border border-white px-4 py-2 ml-2 transition-colors">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center justify-end gap-2">
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={toggleUserMenu} className="p-0">
                  <Image
                    src="/doctor.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-10 w-48 bg-white rounded-lg shadow-lg z-10">
                    {settings.map(({ label, link }) => (
                      <Link
                        key={label}
                        href={link}
                        passHref
                        className="no-underline"
                      >
                        <div
                          onClick={
                            label === "Logout" ? handleLogout : toggleUserMenu
                          }
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                        >
                          {label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" passHref className="no-underline">
                  <button className="text-white rounded-xl border border-white px-2 py-2 transition-colors text-sm">
                    Login
                  </button>
                </Link>
                <Link href="/register" passHref className="no-underline">
                  <button className="text-white rounded-xl border border-white px-2 py-2 ml-1 transition-colors text-sm">
                    Sign Up
                  </button>
                </Link>
              </>
            )}

            <button onClick={toggleNavMenu} className="text-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {isNavOpen && (
              <div className="absolute top-16 right-0 w-48 bg-white rounded-lg shadow-lg z-10">
                {pages.map(({ name, path }) => (
                  <Link
                    key={name}
                    href={path}
                    passHref
                    className="no-underline"
                  >
                    <div
                      onClick={toggleNavMenu}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
