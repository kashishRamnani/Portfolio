import React, { useState } from "react";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-background text-text px-4 md:px-8 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Kashish Ramnani</h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/about" className="hover:text-primary transition">About</a>
          <a href="/projects" className="hover:text-primary transition">Projects</a>
          <a href="/skills" className="hover:text-primary transition">Skills</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-text mb-1 transition-transform"
                  style={{ transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span className="block w-6 h-0.5 bg-text mb-1 transition-opacity"
                  style={{ opacity: isOpen ? 0 : 1 }}></span>
            <span className="block w-6 h-0.5 bg-text transition-transform"
                  style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/about" className="hover:text-primary transition">About</a>
          <a href="/projects" className="hover:text-primary transition">Projects</a>
          <a href="/skills" className="hover:text-primary transition">Skills</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
