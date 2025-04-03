"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="ml-2">Menú</span>
        </Button>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="eco-clima-slogan.png" 
              alt="Slogan de ecoclima "
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-ecoclima-pink transition-colors">
            Inicio
          </Link>
          <Link href="/precios" className="text-white hover:text-ecoclima-pink transition-colors">
            Tarifas
          </Link>
          <Link href="/tarifa-intelligent-go" className="text-white hover:text-ecoclima-pink transition-colors">
            Tarifa Intelligent
          </Link>
          <Link href="/calcula-tu-ahorro" className="text-white hover:text-ecoclima-pink transition-colors">
            Calcula tu ahorro
          </Link>
          <Link href="/solar" className="text-white hover:text-ecoclima-pink transition-colors">
            ecoclima Solar
          </Link>
        </nav>

        {/* Account & Language */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-white hover:text-ecoclima-pink flex items-center">
            Mi cuenta
            <svg width="20" height="20" viewBox="0 0 24 24" className="ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="flex items-center text-white">
            <span>Español</span>
            <span className="ml-1 bg-ecoclima-pink rounded-full w-6 h-6 flex items-center justify-center text-xs">E</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-ecoclima-grey-dark bg-opacity-95 pt-20">
          <nav className="flex flex-col items-center space-y-6 p-8">
            <Link href="/" className="text-xl text-white hover:text-ecoclima-pink transition-colors" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link href="/precios" className="text-xl text-white hover:text-ecoclima-pink transition-colors" onClick={toggleMenu}>
              Tarifas
            </Link>
            <Link href="/tarifa-intelligent-go" className="text-xl text-white hover:text-ecoclima-pink transition-colors" onClick={toggleMenu}>
              Tarifa Intelligent Go
            </Link>
            <Link href="/calcula-tu-ahorro" className="text-xl text-white hover:text-ecoclima-pink transition-colors" onClick={toggleMenu}>
              Calcula tu ahorro
            </Link>
            <Link href="/solar" className="text-xl text-white hover:text-ecoclima-pink transition-colors" onClick={toggleMenu}>
              ecoclima Solar
            </Link>
            <div className="pt-6 mt-6 border-t border-ecoclima-grey flex flex-col items-center space-y-6">
              <Link href="/login" className="text-xl text-white hover:text-ecoclima-pink flex items-center" onClick={toggleMenu}>
                Mi cuenta
                <svg width="24" height="24" viewBox="0 0 24 24" className="ml-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <div className="flex items-center text-white">
                <span className="text-xl">Español</span>
                <span className="ml-2 bg-ecoclima-pink rounded-full w-8 h-8 flex items-center justify-center">E</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
