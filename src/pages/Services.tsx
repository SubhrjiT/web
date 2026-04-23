import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Database, Server, Cpu, Activity, Zap, Layers, Network, ShieldCheck, GitBranch, Binary } from 'lucide-react';

const icons = [
  Database, Server, Cpu, Activity, Zap, Layers, Network, ShieldCheck, GitBranch, Binary
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 px-6">
      <section className="max-w-6xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-primary"
        >
          My <span className="text-gradient">Services.</span>
        </motion.h1>
        <p className="text-xl text-secondary font-light max-w-2xl leading-relaxed">
          Comprehensive data engineering solutions designed to turn your raw data into high-performance assets.
        </p>
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
                className="p-8 rounded-3xl border border-border-primary dark:border-white/5 bg-white dark:bg-zinc-950/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all shadow-sm dark:shadow-none group"
              >
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 w-fit mb-6 text-pink-600 dark:text-pink-500 border border-border-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed font-light">
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
