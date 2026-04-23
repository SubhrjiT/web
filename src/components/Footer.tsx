import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-8 border-t border-zinc-100 dark:border-white/5 mt-20 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold tracking-widest text-primary">{PERSONAL_INFO.name.toUpperCase()}</span>
          </div>
          <p className="text-zinc-500 dark:text-zinc-300 text-sm max-w-xs uppercase tracking-tighter leading-relaxed">
            Building the architecture of the future, one data pipeline at a time.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-mono text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} • DESIGNED & BUILT BY SUBHRAJIT
          </p>
        </div>
      </div>
    </footer>
  );
}
