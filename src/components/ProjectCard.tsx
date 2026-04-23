import { motion } from 'motion/react';
import { ExternalLink, Layers, Terminal } from 'lucide-react';
import { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group project-card-glow glass-morphism rounded-2xl p-8 transition-all hover:border-pink-500/50 hover:shadow-xl dark:bg-zinc-900/50 dark:hover:shadow-pink-500/10 h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-500 group-hover:scale-110 transition-transform">
          <Layers className="w-6 h-6" />
        </div>
        <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{project.period}</span>
      </div>

      <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{project.title}</h3>
      <p className="text-primary text-sm mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      {project.architecture && (
        <div className="mb-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-border-primary">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-500">Architecture</span>
          </div>
          <p className="text-xs text-primary italic">
            {project.architecture}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 rounded-full bg-zinc-50 dark:bg-zinc-950 text-primary text-[10px] uppercase font-mono tracking-wider border border-border-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-6 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Key Impact</span>
          <p className="text-xs font-medium text-pink-600 dark:text-pink-500">{project.impact[0]}</p>
        </div>
        <button className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
