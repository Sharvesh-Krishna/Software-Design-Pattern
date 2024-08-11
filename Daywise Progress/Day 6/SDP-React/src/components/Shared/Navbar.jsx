import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { Avatar } from '@radix-ui/react-avatar';
import debounce from 'lodash/debounce'; // Optional for performance optimization

const Navbar = () => {
  const [show, setShow] = useState(true); // To control the visibility
  const [shrink, setShrink] = useState(false); // To control the height/shrink effect
  const [lastScrollY, setLastScrollY] = useState(0);

  // Debounced scroll handler to improve performance
  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;

      // Handle navbar visibility
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      // Handle navbar shrinkage
      if (currentScrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }

      setLastScrollY(currentScrollY);
    }, 100), // Adjust debounce delay as needed
    [lastScrollY]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const NavLinks = [
    { title: 'Home', path: '/' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' }
  ];

  return (
    <nav className={`fixed w-full transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} ${shrink ? 'h-12' : 'h-12'} bg-blue-700`}>
      <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
        <div className="w-1/3 h-full text-primary font-bold flex justify-start items-center text-lg"> ShiftSymphony AI </div>
        <div className="w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8">
          {NavLinks.map((link, index) => (
            <li key={index} className="list-none">
              <NavLink to={link.path} className={({ isActive }) => (isActive ? "text-white" : "text-gray-400")}>
                  {link.title}
              </NavLink>
            </li>
          ))}
          <ModeToggle />
          <Avatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
