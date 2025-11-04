import React, { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo">
            <a href="/">
                <img src="/maruon_logo_low.png" alt="Maruon Logo" />
            </a>
        </div>

        <nav className="nav-menu">
          <a href="#about">About</a>
          <a href="#works">Brief</a>
          <a href="#contact">Contact</a>
          <a href="#descr">Décrit</a>
        </nav>
      </div>
    </header>
  );
}
