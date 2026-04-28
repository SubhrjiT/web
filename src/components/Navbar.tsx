import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import useSound from 'use-sound';
import { PERSONAL_INFO } from '../constants';
import Logo from './Logo';
import Clock from './Clock';
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
  const [isOpen, setIsOpen] = useState(false);
  
  // Sound effects
  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.2 });

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="max-w-6xl w-full flex items-center justify-between">
          <div className="flex-1">
            <NavLink 
              to="/" 
              className="w-fit" 
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
            >
              <Logo />
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 mx-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onMouseEnter={() => playHover()}
                onClick={() => playClick()}
                className={({ isActive }) =>
                  cn(
                    'relative text-sm transition-all whitespace-nowrap font-medium px-4 py-2 rounded-full',
                    isActive 
                      ? 'text-pink-600 dark:text-pink-400 font-bold bg-pink-500/5 shadow-[0_0_15px_rgba(236,72,153,0.2)]' 
                      : 'text-primary/70 hover:text-primary hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-pink-500/5 dark:bg-pink-500/10 rounded-full border border-pink-500/20 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center gap-3">
            <div className="hidden sm:block">
              <Clock />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => {
                setIsOpen(!isOpen);
                playClick();
              }}
              onMouseEnter={() => playHover()}
              className="lg:hidden p-2 text-primary hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-black lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button 
                onClick={() => {
                  setIsOpen(false);
                  playClick();
                }}
                className="p-2 text-primary hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onMouseEnter={() => playHover()}
                    onClick={() => {
                      setIsOpen(false);
                      playClick();
                    }}
                    className={({ isActive }) =>
                      cn(
                        'relative text-4xl font-black transition-colors',
                        isActive ? 'text-pink-600 dark:text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]' : 'text-primary/20 hover:text-primary'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Clock />
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono uppercase tracking-widest">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
