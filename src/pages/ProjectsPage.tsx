import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <header className="mb-20 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-primary"
        >
          Selected <span className="text-zinc-500 dark:text-zinc-600">Works</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary font-light max-w-xl leading-relaxed"
        >
          A collection of data architectures and automated systems I've built to solve complex business challenges.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
}
