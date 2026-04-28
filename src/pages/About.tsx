import { motion } from 'motion/react';
import useSound from 'use-sound';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Cloud, MapPin, Award, ExternalLink } from 'lucide-react';
import SpinningFocus from '../components/SpinningFocus';
import { cn } from '../lib/utils';

export default function About() {
  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.2 });

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">
      <header className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="text-center md:text-left flex-grow">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-primary leading-tight"
            >
              About <span className="text-zinc-500 dark:text-zinc-600">Me.</span>
            </motion.h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-zinc-400 dark:text-zinc-500 font-mono text-[11px] uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-500" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
                {PERSONAL_INFO.role}
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 justify-center">
            <SpinningFocus topText="Driven By" centerText="Data" accentColor="cyan" variant="orbit" />
          </div>
        </div>
      </header>

      <section className="mb-32">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-4">
          Profile <span className="text-zinc-500 dark:text-zinc-600">Information</span> <span className="h-px flex-grow bg-zinc-100 dark:bg-zinc-800" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-primary">
          <div className="md:col-span-1 space-y-8">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-1">Name</span>
              <p className="text-xl font-bold">{PERSONAL_INFO.name}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-1">Role</span>
              <p className="text-xl font-bold text-pink-600 dark:text-pink-500">{PERSONAL_INFO.role}</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-1">Tagline</span>
              <p className="text-2xl font-medium tracking-tight leading-snug">{PERSONAL_INFO.tagline}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-1">Bio</span>
              <p className="text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                {PERSONAL_INFO.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-4">
          Professional <span className="text-zinc-500 dark:text-zinc-600">Experience</span> <span className="h-px flex-grow bg-zinc-100 dark:bg-zinc-800" />
        </h2>
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => playHover()}
              className="relative pl-8 border-l border-zinc-100 dark:border-white/10 group cursor-default"
            >
              <div className={cn(
                "absolute w-3 h-3 rounded-full -left-[6.5px] top-1.5 transition-all duration-300",
                exp.current 
                  ? "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" 
                  : "bg-zinc-300 dark:bg-zinc-700 group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              )} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div className="group-hover:translate-x-1 transition-transform">
                  <h3 className="text-xl font-bold text-primary group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-900 px-3 py-1 rounded-full w-fit border border-border-primary">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-4">
          Verified <span className="text-zinc-500 dark:text-zinc-600">Certifications</span> <span className="h-px flex-grow bg-zinc-100 dark:bg-zinc-800" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.a 
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
              className="p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900 shadow-sm dark:shadow-none hover:bg-white dark:hover:bg-zinc-800 transition-all group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/[0.02] transition-colors pointer-events-none" />
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-500 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 relative z-10">{cert.title}</h3>
              <div className="flex items-center justify-between mt-4 relative z-10">
                <p className="text-primary text-xs font-mono uppercase tracking-wider">{cert.issuer}</p>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{cert.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-4">
          Academic <span className="text-zinc-500 dark:text-zinc-600">Background</span> <span className="h-px flex-grow bg-zinc-100 dark:bg-zinc-800" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
              className="p-6 md:p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900 shadow-sm dark:shadow-none hover:bg-white dark:hover:bg-zinc-800 transition-all group cursor-default"
            >
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{edu.degree}</h3>
              <p className="text-primary text-sm mb-4">{edu.school}</p>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-4">
          Core <span className="text-zinc-500 dark:text-zinc-600">Values</span> <span className="h-px flex-grow bg-zinc-100 dark:bg-zinc-800" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            onMouseEnter={() => playHover()}
            className="p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-900/50 transition-all shadow-sm dark:shadow-none hover:shadow-md group"
          >
            <h3 className="text-xl font-bold mb-4 text-pink-600 dark:text-pink-500 group-hover:scale-105 origin-left transition-transform">Automation First</h3>
            <p className="text-sm text-primary leading-relaxed font-light">If a task is repetitive, it's a candidate for a script. I believe in engineering systems that work for us, not the other way around.</p>
          </div>
          <div 
            onMouseEnter={() => playHover()}
            className="p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-900/50 transition-all shadow-sm dark:shadow-none hover:shadow-md group"
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-600 dark:text-cyan-500 group-hover:scale-105 origin-left transition-transform">Quality at Source</h3>
            <p className="text-sm text-primary leading-relaxed font-light">Data quality shouldn't be an afterthought. It should be baked into every layer of the architecture, from Bronze to Gold.</p>
          </div>
          <div 
            onMouseEnter={() => playHover()}
            className="p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-900/50 transition-all shadow-sm dark:shadow-none hover:shadow-md group"
          >
            <h3 className="text-xl font-bold mb-4 text-primary group-hover:scale-105 origin-left transition-transform">Scalable Design</h3>
            <p className="text-sm text-primary leading-relaxed font-light">Architecture should be designed to handle tomorrow's volume today. I focus on building resilient, cloud-native solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
