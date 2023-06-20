"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    href: "/about",
    title: "about me",
    className: "",
  },
  {
    href: "/experience",
    title: "work experience",
    className: "",
  },
  {
    href: "/portfolio",
    title: "portfolio",
    className: "",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-5 pb-2 mb-4 border-b-[1px] border-b-[#2B2C30]">
      {NavLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[#2B2C30] ${
              isActive ? "text-[#2B2C30]" : "text-gray-400"
            }`}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
