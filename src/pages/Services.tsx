import { motion } from 'motion/react';
import useSound from 'use-sound';
import { SERVICES } from '../constants';
import { Database, Server, Cpu, Activity, Zap, Layers, Network, ShieldCheck, GitBranch, Binary } from 'lucide-react';
import SpinningFocus from '../components/SpinningFocus';

const icons = [
  Database, Server, Cpu, Activity, Zap, Layers, Network, ShieldCheck, GitBranch, Binary
];

export default function Services() {
  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.2 });

  return (
    <div className="pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <section className="max-w-6xl mx-auto mb-16 md:mb-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-grow">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-primary"
          >
            My <span className="text-zinc-500 dark:text-zinc-600">Services.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-primary font-bold max-w-2xl leading-tight">
            Building <span className="text-gradient">scalable,</span> <span className="text-gradient">reliable,</span> and <span className="text-gradient">analytics-ready</span> data solutions
          </p>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <SpinningFocus topText="Offering" centerText="Solutions" accentColor="cyan" variant="stream" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onMouseEnter={() => playHover()}
                onClick={() => playClick()}
                className="p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-white dark:bg-zinc-950/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all shadow-sm dark:shadow-none group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/[0.02] transition-colors pointer-events-none" />
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 w-fit mb-6 text-pink-600 dark:text-pink-500 border border-border-primary group-hover:scale-110 transition-transform relative z-10">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary relative z-10">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed font-light relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
