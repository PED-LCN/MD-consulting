import React, { useState, useEffect } from "react";
import logo from "./icons/logo.jpeg";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#benefits", label: "Benefícios" },
    { href: "#how-it-works", label: "Como funciona?" },
    { href: "#pricing", label: "Planos" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white md:bg-blue-900 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="flex items-center space-x-2 relative z-50"
        >
          <div
            className="flex items-center space-x-1 w-12 h-12 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <span
            className={`text-2xl font-bold ${isScrolled || isMenuOpen ? "text-blue-900 md:text-blue-100" : "text-blue-100"}`}
          >
            MD consulting
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-blue-900 bg-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.6)] rounded-full py-1 px-4
              hover:text-blue-900 font-medium  transition-transform duration-200 hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5598182099179?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20de%20ingl%C3%AAs."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-yellow-400 text-blue-900 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:text-blue-900 font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105 "
        >
          Começar agora
        </a>
        <button
          className={`md:hidden z-50 ${isScrolled || isMenuOpen ? "text-white-900" : "text-blue-100"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-gray-600 hover:text-blue-900 font-medium text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598182099179?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consultoria%20de%20ingl%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Começar agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
