'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#work', label: 'WORK' },
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#achievements', label: 'ACHIEVEMENTS' },
  { href: '#contact', label: 'CONTACT' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-shell">
        <Link href="#top" className="brand-mark" aria-label="Vamshi Gowda home">
          VAMSHI GOWDA
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}
