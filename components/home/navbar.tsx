"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Construction, Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Safety", href: "#safety" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md py-3 shadow-lg border-b border-zinc-200 dark:border-zinc-800" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-amber-500 p-1.5 rounded-lg transition-transform group-hover:rotate-12">
              <Construction className="h-6 w-6 text-black" />
            </div>
            <span className={`text-xl font-black tracking-tighter transition-colors ${
              isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
            }`}>
              GANESH <span className="text-amber-500">CRANES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-amber-500 ${
                  isScrolled ? "text-zinc-600 dark:text-zinc-400" : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+919907975530"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-5 py-2.5 rounded-full text-sm font-black transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              <Phone className="h-4 w-4" />
              +91 99079 75530
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900" : "text-white bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-zinc-900 dark:text-white py-2 border-b border-zinc-100 dark:border-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+919907975530"
              className="flex items-center justify-center gap-2 bg-amber-500 text-black py-4 rounded-xl font-black mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
