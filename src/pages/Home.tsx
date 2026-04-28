import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, BookOpen, GraduationCap } from 'lucide-react';
import useSound from 'use-sound';
import { PERSONAL_INFO, PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import SpinningFocus from '../components/SpinningFocus';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  const selectedName = PERSONAL_INFO.name.split(' ')[0];
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.2 });

  return (
    <div className="flex flex-col gap-32 pb-20 pt-20">
      {/* Hero Section */}
      <section className="px-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => playHover()}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight text-primary flex flex-wrap items-center gap-x-4">
            <span>Hi, I'm</span>
            <span className="text-pink-600 dark:text-pink-500">
              Subh
            </span>
            <span className="relative inline-flex items-center h-[1.2em] flex-1">
              <motion.span
                initial={{ x: -50, opacity: 0, scale: 0.5 }}
                animate={{ 
                  x: 350, 
                  opacity: [0, 1, 0.8, 0],
                  scale: [0.5, 1.2, 1, 0.5]
                }}
                transition={{ 
                  duration: 6, 
                  ease: "easeOut",
                  times: [0, 0.2, 0.5, 1]
                }}
                className="absolute whitespace-nowrap text-3xl md:text-5xl text-primary/10 font-mono pointer-events-none"
              >
                ✈︎
              </motion.span>
            </span>
          </h1>
          
          <div className="flex flex-col gap-8 text-primary text-lg max-w-xl leading-relaxed font-light">
            <p>
              I am a <span className="font-bold text-pink-600 dark:text-pink-500">Data Engineer</span> with 3+ years of experience building scalable ETL/ELT pipelines using Azure Data Factory, Databricks (PySpark), and Microsoft Fabric.
            </p>
            
            <p>
              I specialize in designing robust data architectures, optimizing workflows, and enabling analytics-ready datasets to solve complex business challenges.
            </p>

            <p>
              This is my place for <span className="font-medium text-pink-600 dark:text-pink-500">
                ideas, projects, and everything
              </span> in between.
            </p>


          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <HeroCard 
            icon={<FlaskConical className="w-6 h-6 text-emerald-500" />}
            title="What I built"
            linkText="Projects"
            linkTo="/projects"
            accentColor="emerald"
          />
          <HeroCard 
            icon={<BookOpen className="w-6 h-6 text-pink-500" />}
            title="Read my story"
            linkText="Website"
            linkTo="/about"
            accentColor="pink"
          />
          <HeroCard 
            icon={<GraduationCap className="w-6 h-6 text-purple-500" />}
            title="Hire me!"
            linkText="Contacts"
            linkTo="/contact"
            accentColor="purple"
          />
        </motion.div>
      </section>

      {/* Latest / Currently Learning Section */}
      <section className="px-8 max-w-6xl mx-auto mb-40">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Latest / <span className="text-zinc-500 dark:text-zinc-600">Currently Learning</span></h2>
          <div className="h-px bg-zinc-100 dark:bg-zinc-800 flex-grow" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: "🚀", text: "Exploring Advanced Spark Optimization & Performance Tuning" },
              { icon: "☁️", text: "Deepening expertise in Microsoft Fabric & Azure Data Architecture" },
              { icon: "⚡", text: "Learning Real-time Data Processing (Streaming with Spark/Kafka)" },
              { icon: "🏗️", text: "Strengthening Data Modeling & Medallion Architecture" },
              { icon: "🔧", text: "Improving CI/CD for Data Pipelines" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => playHover()}
                className="flex items-start gap-4 group cursor-default"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                <p className="text-secondary text-lg font-light leading-relaxed group-hover:text-primary transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
          
          <div className="hidden md:flex items-center justify-center">
            <SpinningFocus topText="Focus" centerText="Engineering" />
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroCard({ icon, title, linkText, linkTo, accentColor }: { 
  icon: React.ReactNode, 
  title: string, 
  linkText: string, 
  linkTo: string,
  accentColor: string 
}) {
  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });
  const [playClick] = useSound('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', { volume: 0.2 });

  const colors = {
    emerald: { 
      border: 'border-emerald-100/50 dark:border-emerald-900/20', 
      hoverBorder: 'hover:border-emerald-500/50', 
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]', 
      glow: 'bg-emerald-500/5',
      text: 'text-amber-500 dark:text-amber-400' 
    },
    pink: { 
      border: 'border-pink-100/50 dark:border-pink-900/20', 
      hoverBorder: 'hover:border-pink-500/50', 
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.1)]', 
      glow: 'bg-pink-500/5',
      text: 'text-blue-500 dark:text-blue-400' 
    },
    purple: { 
      border: 'border-purple-100/50 dark:border-purple-900/20', 
      hoverBorder: 'hover:border-purple-500/50', 
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]', 
      glow: 'bg-purple-500/5',
      text: 'text-pink-500 dark:text-pink-400' 
    },
  }[accentColor as 'emerald' | 'pink' | 'purple'];

  return (
    <Link 
      to={linkTo} 
      onMouseEnter={() => playHover()}
      onClick={() => playClick()}
      className={cn(
        "group relative flex items-center justify-between p-6 bg-white dark:bg-zinc-950 border rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-sm dark:shadow-none overflow-hidden",
        colors.border,
        colors.hoverBorder,
        colors.hoverShadow,
        "dark:border-white/10"
      )}
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity", colors.glow)} />
      
      <div className="flex items-center gap-4 relative z-10">
        {icon}
        <span className="font-medium text-primary text-lg">{title}</span>
      </div>
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-[1px] h-4 bg-zinc-100 dark:bg-zinc-800" />
        <div className={cn("flex items-center gap-1.5 text-sm font-bold transition-colors", colors.text)}>
          {linkText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
