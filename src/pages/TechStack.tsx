import { motion } from 'motion/react';
import { Database, Cloud, Code, Sparkles, Layout, Infinity, Layers } from 'lucide-react';
import useSound from 'use-sound';
import SpinningFocus from '../components/SpinningFocus';

export default function TechStack() {
  const [playHover] = useSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', { volume: 0.1 });

  const skills = [
    { 
      icon: <Cloud className="w-5 h-5" />, 
      title: 'Azure Technologies', 
      tools: ['Azure Data Factory', 'Azure Databricks', 'Azure Synapse Analytics', 'ADLS Gen2', 'Azure SQL'] 
    },
    { 
      icon: <Database className="w-5 h-5" />, 
      title: 'Data Platforms', 
      tools: ['Microsoft Fabric', 'Delta Lake', 'Unity Catalog'] 
    },
    { 
      icon: <Layout className="w-5 h-5" />, 
      title: 'Business Intelligence', 
      tools: ['Power BI'] 
    },
    { 
      icon: <Code className="w-5 h-5" />, 
      title: 'Programming & Querying', 
      tools: ['PySpark', 'Python', 'SQL'] 
    },
    { 
      icon: <Layers className="w-5 h-5" />, 
      title: 'Big Data Technologies', 
      tools: ['Apache Spark', 'Hadoop', 'Hive', 'Spark Optimization'] 
    },
    { 
      icon: <Infinity className="w-5 h-5" />, 
      title: 'DevOps & CI/CD', 
      tools: ['Azure DevOps (CI/CD)', 'Git', 'GitHub', 'Bitbucket'] 
    },
    { 
      icon: <Sparkles className="w-5 h-5" />, 
      title: 'Data Engineering Concepts', 
      tools: [
        'ETL/ELT', 'Medallion Architecture', 'Data Modeling', 
        'Incremental Loads', 'Schema Evolution', 'Data Governance', 
        'Data Quality', 'Pipeline Orchestration', 'Data Warehousing', 
        'Batch Processing', 'Real-Time Data Processing'
      ] 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20">
      <header className="mb-16 md:mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-primary"
          >
            Tech <span className="text-zinc-400 dark:text-zinc-600">Stack</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary font-light leading-relaxed"
          >
            A comprehensive overview of the tools, platforms, and methodologies I leverage to build modern data architectures.
          </motion.p>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <SpinningFocus topText="Modern" centerText="Stack" accentColor="green" variant="grid" />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onMouseEnter={() => playHover()}
            className={`glass-morphism rounded-2xl p-6 border border-border-primary dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-pink-500/30 transition-all duration-300 group shadow-sm dark:shadow-none hover:shadow-md ${idx === skills.length -1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 w-fit mb-6 text-cyan-600 dark:text-cyan-500 group-hover:scale-110 transition-transform border border-border-primary">
              {skill.icon}
            </div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-primary">{skill.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {skill.tools.map(tool => (
                <span key={tool} className="text-primary text-xs font-mono flex items-center whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-pink-500 mr-2 opacity-50" />
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
