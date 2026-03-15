"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }, [pathname, mobileOpen]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-md" 
          : "bg-white shadow-sm"
      }`}
      role="banner"
    >
      {/* h-16 garante uma barra fina de 64px de altura */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          aria-label="BC Consultoria - Página Inicial"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2 rounded"
        >
          <Image
            src="/logo.webp"
            alt="Logo BC Consultoria"
            width={160}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2 rounded px-1 py-0.5 ${
                  isActive
                    ? "text-red-900 border-b-2 border-red-900"
                    : "text-gray-700 hover:text-red-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contato"
            className="ml-2 bg-red-900 hover:bg-red-800 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-red-900"
          >
            Fale Conosco
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:text-red-900 hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="navigation"
        aria-label="Menu mobile"
        aria-hidden={!mobileOpen}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100 shadow-lg`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-red-900 focus-visible:outline-offset-2 ${
                  isActive
                    ? "bg-red-50 text-red-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-red-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contato"
            className="mt-2 bg-red-900 hover:bg-red-800 text-white text-sm font-bold px-4 py-3 rounded-lg text-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}