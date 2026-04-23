import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="max-w-6xl w-full flex items-center">
        <div className="flex-1">
          <NavLink to="/" className="flex items-center gap-2 group w-fit">
            <span className="font-mono text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              ~<span className="text-zinc-600 dark:text-zinc-400">/</span><span className="animate-pulse">|</span>
            </span>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-6 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm transition-colors whitespace-nowrap font-medium',
                  isActive ? 'text-primary font-bold' : 'text-primary/70 hover:text-primary'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
