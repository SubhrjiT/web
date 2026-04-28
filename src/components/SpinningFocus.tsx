import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SpinningFocusProps {
  topText: string;
  centerText: string;
  className?: string;
  accentColor?: 'pink' | 'cyan' | 'purple' | 'green';
}

export default function SpinningFocus({ 
  topText, 
  centerText, 
  className,
  accentColor = 'pink',
  variant = 'spin'
}: SpinningFocusProps & { variant?: 'spin' | 'layers' | 'grid' | 'stream' | 'flow' | 'orbit' }) {
  const colors = {
    pink: 'text-pink-600 dark:text-pink-500',
    cyan: 'text-cyan-600 dark:text-cyan-500',
    purple: 'text-purple-600 dark:text-purple-500',
    green: 'text-emerald-600 dark:text-emerald-500',
  };

  const renderVariant = () => {
    switch (variant) {
      case 'orbit':
        return (
          <div className="relative w-full h-full">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-zinc-100/30 dark:border-zinc-800/30 rounded-full"
              >
                <motion.div 
                  className={cn("w-3 h-3 rounded-full absolute -top-1.5 left-1/2", i === 0 ? 'bg-pink-500' : i === 1 ? 'bg-purple-500' : 'bg-cyan-500')}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        );
      case 'layers':
        return (
          <div className="flex flex-col gap-3 scale-90">
            {[
              { label: 'GOLD', color: 'bg-yellow-500/10 border-yellow-500/30', delay: 0 },
              { label: 'SILVER', color: 'bg-zinc-400/10 border-zinc-400/30', delay: 0.1 },
              { label: 'BRONZE', color: 'bg-orange-700/10 border-orange-700/30', delay: 0.2 },
            ].map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateX: 45, y: -20 }}
                animate={{ opacity: 1, rotateX: 45, y: 0 }}
                transition={{ delay: layer.delay, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className={cn("w-56 h-14 rounded-xl border-2 flex items-center justify-center text-[11px] font-black tracking-[0.4em] text-primary/30", layer.color)}
              >
                {layer.label}
              </motion.div>
            ))}
          </div>
        );
      case 'grid':
        return (
          <div className="grid grid-cols-4 gap-3 scale-110">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.4, 0.1],
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
                className="w-5 h-5 bg-emerald-500/20 backdrop-blur-sm"
              />
            ))}
          </div>
        );
      case 'stream':
        return (
          <div className="flex gap-6 h-48 overflow-hidden items-end pt-16 scale-110">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [-150, 150], opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2 + Math.random(), 
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="w-1.5 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent h-full grow rounded-full"
              />
            ))}
          </div>
        );
      case 'flow':
        return (
          <div className="relative w-64 h-16 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center px-6 scale-110">
             <div className="absolute left-0 w-3 h-3 rounded-full bg-purple-500 -ml-1.5 shadow-[0_0_15px_#a855f7]" />
             <div className="absolute right-0 w-3 h-3 rounded-full bg-purple-500 -mr-1.5 shadow-[0_0_15px_#a855f7]" />
             <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />
             {[...Array(4)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ left: '0%' }}
                 animate={{ left: '100%' }}
                 transition={{ 
                   duration: 2.5, 
                   repeat: Infinity,
                   delay: i * 0.7,
                   ease: "linear"
                 }}
                 className="absolute w-2 h-2 rounded-full bg-purple-400/60"
               />
             ))}
          </div>
        );
      default:
        return (
          <div className="relative w-full h-full">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-200/50 dark:border-zinc-800/50"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-zinc-100 dark:border-zinc-900"
            />
          </div>
        );
    }
  };

  return (
    <div className={cn("relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center", className)}>
      {renderVariant()}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center bg-white/20 dark:bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-full border border-white/10 shadow-2xl scale-90 md:scale-100">
          <span className="text-[8px] md:text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em] block mb-1">
            {topText}
          </span>
          <span className={cn("text-lg md:text-2xl font-black uppercase tracking-widest", colors[accentColor])}>
            {centerText}
          </span>
        </div>
      </div>
    </div>
  );
}
