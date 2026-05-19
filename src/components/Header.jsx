import { useState } from 'react';
import { navItems } from '../data/siteContent.js';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#top" className="logo" onClick={closeMenu}>
        <span>K</span>aizen <small>Private GymKid</small>
      </a>
      <nav className={isMenuOpen ? 'open' : ''} aria-label="Điều hướng chính">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#dang-ky" className="nav-cta" onClick={closeMenu}>
          Đánh giá miễn phí
        </a>
      </nav>
      <button
        className="menu-btn"
        type="button"
        aria-label="Mở menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        ☰
      </button>
    </header>
  );
}
