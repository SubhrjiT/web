import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Home',
      '/about': 'About',
      '/projects': 'Projects',
      '/blog': 'Blog',
      '/contact': 'Contact',
    };
    
    // For dynamic routes like blog posts, this won't match exactly
    const baseTitle = 'Subhrajit Behera';
    const subTitle = titles[location.pathname] || (location.pathname.startsWith('/blog/') ? 'Blog Post' : '');
    document.title = subTitle ? `${subTitle} | ${baseTitle}` : baseTitle;
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col pt-24 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
