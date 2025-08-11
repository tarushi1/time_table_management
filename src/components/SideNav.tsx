"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Table, User, LogOut as LogOutIcon } from 'lucide-react';

const navLinks = [
  { name: 'Classes', href: '/dashboard/classes', icon: <Table size={20} strokeWidth={1.5} /> },
  { name: 'Teachers', href: '/dashboard/teachers', icon: <User size={20} strokeWidth={1.5} /> },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-white text-gray-800 py-6 w-60">
      <div className="flex flex-col items-center mb-10">
        <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a8.25 8.25 0 1115 0v.75H4.5v-.75z" />
          </svg>
        </div>
        <p className="font-medium text-[15px] mt-3">Rahul Sharma</p>
        <p className="text-xs text-gray-500">user@gmail.com</p>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-[15px] ${
                    isActive
                      ? 'bg-blue-100 text-blue-600'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto">
        <Link
          href="/dashboard/logout"
          className={`flex items-center space-x-3 px-4 py-3 rounded-md text-[15px] ${
            pathname.startsWith("/dashboard/logout")
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <LogOutIcon size={20} strokeWidth={1.5} />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
}
