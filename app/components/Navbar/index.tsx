"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavLinks = [
  {
    href: "/",
    title: "Home",
    className: "",
  },
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
  const router = useRouter();
  const isMobile = window.innerWidth < 640;

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const [current, setCurrent] = useState<number>(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrent((prev) => (prev < 3 ? prev + 1 : prev));
      router.push(`${NavLinks[current + 1].href}`);
    }
    if (isRightSwipe) {
      setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <>
      {isMobile ? (
        <div className="flex pb-2 mb-4 border-b-[1px] border-b-[#2B2C30] justify-evenly">
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {NavLinks[current].title}
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Navbar;
