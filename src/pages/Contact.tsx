import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <header className="mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-primary"
        >
          Let's <span className="text-zinc-400 dark:text-zinc-600">Connect.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary font-light max-w-2xl mx-auto leading-relaxed"
        >
          Whether you have a question about data architecture or just want to chat about the latest in cloud tech, I'm always happy to connect.
        </motion.p>
      </header>

      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-morphism rounded-3xl p-8 md:p-12 border border-border-primary dark:border-white/5 bg-white/50 dark:bg-zinc-900 flex flex-col gap-8 shadow-sm dark:shadow-none"
          >
            <h3 className="text-xl font-bold mb-2 text-primary">Direct Contact</h3>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-6 group text-primary hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">Email</div>
                  <div className="font-mono text-sm">{PERSONAL_INFO.email}</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-morphism rounded-3xl p-8 md:p-12 border border-border-primary dark:border-white/5 bg-white/50 dark:bg-zinc-900 shadow-sm dark:shadow-none"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Socials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-border-primary dark:border-white/5 hover:border-pink-500/30 transition-colors group text-primary hover:text-primary">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-pink-600 dark:text-pink-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-border-primary dark:border-white/5 hover:border-cyan-500/30 transition-colors group text-primary hover:text-primary">
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center p-12 rounded-3xl border border-dashed border-border-primary dark:border-zinc-800"
          >
            <div className="text-[10px] text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.4em] mb-4 font-bold">Location</div>
            <div className="text-2xl font-black text-primary">{PERSONAL_INFO.location}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-600 font-mono mt-2 uppercase tracking-widest">GMT +5:30</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
