import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, BookOpen, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  const selectedName = PERSONAL_INFO.name.split(' ')[0];
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="flex flex-col gap-32 pb-20 pt-20">
      {/* Hero Section */}
      <section className="px-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl font-bold mb-10 tracking-tight leading-tight text-primary">
            Hi, I'm{' '}
            <span className="inline-flex text-pink-600 dark:text-pink-500">
              {'Subh'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    times: [0, 0.1, 0.8, 1],
                    ease: 'easeInOut',
                  }}
                >
                  {char}
                </motion.span>
              ))}
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
              This is my place for <motion.span 
                animate={{ 
                  color: ['#db2777', '#0891b2', '#db2777'],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="font-medium"
              >
                ideas, projects, and everything
              </motion.span> in between.
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
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Latest / Currently Learning</h2>
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
              <div key={idx} className="flex items-start gap-4 group">
                <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                <p className="text-secondary text-lg font-light leading-relaxed group-hover:text-primary transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-200 dark:border-zinc-800"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-zinc-100 dark:border-zinc-900"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block mb-2">Focus</span>
                  <span className="text-xl font-black text-pink-600 dark:text-pink-500">ENGINEERING</span>
                </div>
              </div>
            </div>
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
  const { border, hoverBorder, hoverShadow, text } = {
    emerald: { 
      border: 'border-zinc-200', 
      hoverBorder: 'hover:border-emerald-500/50', 
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]', 
      text: 'text-amber-500 dark:text-amber-400' 
    },
    pink: { 
      border: 'border-zinc-200', 
      hoverBorder: 'hover:border-pink-500/50', 
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]', 
      text: 'text-blue-500 dark:text-blue-400' 
    },
    purple: { 
      border: 'border-zinc-200', 
      hoverBorder: 'hover:border-purple-500/50', 
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]', 
      text: 'text-pink-500 dark:text-pink-400' 
    },
  }[accentColor as 'emerald' | 'pink' | 'purple'];

  return (
    <Link 
      to={linkTo} 
      className={cn(
        "group flex items-center justify-between p-6 bg-white dark:bg-zinc-950 border rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-sm dark:shadow-none",
        border,
        hoverBorder,
        hoverShadow,
        "dark:border-white/10"
      )}
    >
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-medium text-primary text-lg">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[1px] h-4 bg-zinc-100 dark:bg-zinc-800" />
        <div className={cn("flex items-center gap-1.5 text-sm font-bold transition-colors", text)}>
          {linkText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
