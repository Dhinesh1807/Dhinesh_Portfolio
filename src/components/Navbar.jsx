import { useState, useEffect } from 'react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-mode');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="logo">Dhinesh M</div>
      <ul className="nl">
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
        <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenResume(); }}>Resume</a></li>
      </ul>
      <div className="nav-right">
        <button
          className="theme-toggle"
          id="themeToggle"
          onClick={toggleTheme}
          title="Toggle Dark/Light Mode"
        >
          <span id="themeIcon">{isLight ? '☀️' : '🌙'}</span>
          <span className="theme-txt">{isLight ? 'Light' : 'Dark'}</span>
        </button>
        <a
          href="#contact"
          className="btn-nav"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
