"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold lg:text-xl">
          My <span className="text-blue-400">To Do List</span>
        </div>
        <div className="hidden space-x-4 md:flex lg:text-xl">
          <Link href="/">
            <p className="hover:text-blue-400">Home</p>
          </Link>
          <Link href="/add-task">
            <p className="hover:text-blue-400">Add Task</p>
          </Link>
          <Link href="/calendar">
            <p className="hover:text-blue-400">Calendar</p>
          </Link>
          <Link href="/login">
            <p className="hover:text-blue-400">Login</p>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-6 flex flex-col gap-y-6 md:hidden">
          <Link href="/">
            <p className="block hover:text-blue-400">Home</p>
          </Link>
          <Link href="/add-task">
            <p className="block hover:text-blue-400">Add Task</p>
          </Link>
          <Link href="/calendar">
            <p className="block hover:text-blue-400">Calendar</p>
          </Link>
          <Link href="/login">
            <p className="block hover:text-blue-400">Login</p>
          </Link>
        </div>
      )}
    </nav>
  );
}
