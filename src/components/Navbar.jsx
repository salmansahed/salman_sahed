"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiChevronDownCircle } from "react-icons/bi";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Contacts", href: "contacts" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu control state

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href),
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4">
      <div className="mx-auto my-4 flex max-w-6xl items-center justify-between rounded-full border border-white/20 bg-white/10 py-4 px-6 text-white/80 backdrop-blur-md shadow-2xl shadow-white/10">
        <div>
          <h1 className="text-xl font-semibold uppercase text-white">
            <span className="text-green-400">{"<"}</span> SALMAN <span className="text-red-400">{"/>"}</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/#${link.href}`}
              onClick={() => setActiveSection(link.href)}
              className={`text-sm rounded-full px-3 py-1 font-medium transition-all duration-300 border ${
                activeSection === link.href
                  ? "bg-white/20 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "border-white/20 hover:border-white/60 text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={"/#home"}
            onClick={() => handleLinkClick("home")}
            className={`rounded-full border px-3 py-1 text-sm transition-all duration-300 ${
              activeSection === "home"
                ? "bg-white/20 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "border-white/30 text-white/70"
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition-all duration-300 ${
              isMenuOpen
                ? "bg-white/20 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "border-white/30 text-white/70"
            }`}
          >
            More{" "}
            <BiChevronDownCircle
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (with animation) */}
      <div
        className={`absolute left-4 right-4 top-24 transform rounded-3xl border border-white/30 bg-white/20 p-4 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/#${link.href}`}
              onClick={() => handleLinkClick(link.href)}
              className={`flex justify-center rounded-xl border py-3 text-sm font-medium transition-all ${
                activeSection === link.href
                  ? "bg-white/30 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "border-white/10 bg-white/5 text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
