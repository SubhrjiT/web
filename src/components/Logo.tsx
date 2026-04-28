import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div 
      className="relative w-12 h-12 flex items-center justify-center group cursor-pointer"
      whileHover="hover"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full fill-none stroke-zinc-900 dark:stroke-white stroke-[3px]"
      >
        {/* Connection Lines */}
        <motion.path 
          d="M 20 40 L 20 70 L 40 70 M 80 40 L 80 70 L 60 70"
          className="stroke-zinc-400 dark:stroke-zinc-600 stroke-[1px] stroke-dash-2"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Laptop/Base */}
        <path 
          d="M 30 85 L 70 85 L 75 92 L 25 92 Z" 
          className="fill-zinc-100 dark:fill-zinc-800 stroke-zinc-400 dark:stroke-zinc-600 stroke-[2px]"
        />

        {/* Cloud Body */}
        <motion.path 
          d="M 35 65 Q 25 65 25 55 Q 25 45 35 45 Q 35 35 45 35 Q 55 25 65 35 Q 75 35 75 45 Q 85 45 85 55 Q 85 65 75 65 Z"
          className="fill-blue-500/10 stroke-blue-500 stroke-[2px]"
          animate={{ 
            y: [0, -3, 0],
            fillOpacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Server Racks (Left/Right) */}
        <g className="stroke-zinc-400 dark:stroke-zinc-600 stroke-[1.5px]">
          <rect x="15" y="25" width="15" height="5" rx="1" className="fill-zinc-50 dark:fill-zinc-900" />
          <rect x="15" y="32" width="15" height="5" rx="1" className="fill-zinc-50 dark:fill-zinc-900" />
          
          <rect x="70" y="25" width="15" height="5" rx="1" className="fill-zinc-50 dark:fill-zinc-900" />
          <rect x="70" y="32" width="15" height="5" rx="1" className="fill-zinc-50 dark:fill-zinc-900" />
        </g>

        {/* Rotating Gear/Cog */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 58px' }}
        >
          <circle cx="50" cy="58" r="8" className="fill-zinc-100 dark:fill-zinc-800 stroke-pink-500 stroke-[2px]" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect 
              key={angle}
              x="48" y="46" width="4" height="4"
              transform={`rotate(${angle} 50 58) translate(0 -8)`}
              className="fill-pink-500"
            />
          ))}
        </motion.g>

        {/* Top Shield */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <path
            d="M 40 25 Q 50 18 60 25 L 60 35 Q 50 48 40 35 Z"
            className="fill-amber-500/10 stroke-amber-500 stroke-[2px]"
          />
          <motion.path 
            d="M 46 30 L 49 33 L 54 27"
            className="stroke-amber-600 dark:stroke-amber-400 stroke-[2px]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
