import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onScroll = () => setIsOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  return (
    <nav className="w-full max-w-7xl 
    flex justify-between items-center 
    px-5 py-5 md:px-8 md:py-8 mx-auto relative">
      <Link to="/" className="text-[28px] md:text-3xl text-secondary font-display tracking-wide uppercase z-50 relative">
        Yanelly Michelena
      </Link>

      <div className="hidden md:flex space-x-8 text-secondary font-light">
        <Link to="/" className='hover:text-accent transition-colors'>
          Proyectos
        </Link>
        <Link to="/about" className='hover:text-accent transition-colors'>
          Sobre Mí
        </Link>
        <a href="#contact" className='hover:text-accent transition-colors'>
          Contacto
        </a>
      </div>

      <button
        className="md:hidden text-secondary hover:text-accent transition-colors focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu size={32} strokeWidth={1.5} />
      </button>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background flex flex-col items-center justify-center space-y-8 
        text-xl text-secondary font-light z-40">
          <Link
            to="/"
            className="hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            to="/about"
            className="hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sobre Mí
          </Link>
          <a
            href="#contact"
            className="hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
