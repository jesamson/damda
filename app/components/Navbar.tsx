"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/shop", label: "Shop" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
];

const ORDER_URL =
  "https://www.grubhub.com/restaurant/the-latte-shop-228-1st-st-los-angeles/13157200";

function DamdaLogo() {
  return (
    <svg
      viewBox="0 0 72 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-auto"
      aria-label="Damda"
    >
      <rect
        x="3.5"
        y="3.5"
        width="65"
        height="101"
        rx="32.5"
        stroke="#fcfaec"
        strokeWidth="4"
      />
      <text
        x="36"
        y="31"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="34"
        fill="#fcfaec"
        style={{ fontFamily: "sans-serif" }}
      >
        담
      </text>
      <text
        x="36"
        y="77"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="34"
        fill="#fcfaec"
        style={{ fontFamily: "sans-serif" }}
      >
        다
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-burgundy text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        <Link href="/" className="py-1 justify-self-start">
          <DamdaLogo />
        </Link>

        {/* Desktop nav — center column */}
        <ul className="hidden md:flex justify-center gap-10 text-xs tracking-widest uppercase">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-opacity hover:opacity-70 ${
                  pathname === href ? "border-b border-white pb-0.5" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Order Now — right column */}
        <div className="hidden md:flex justify-end">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream text-burgundy px-6 py-2 text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 justify-self-end col-start-3"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-burgundy-dark border-t border-white/10">
          <ul className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cream text-burgundy px-6 py-2.5 text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
                onClick={() => setOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
