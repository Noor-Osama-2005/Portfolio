import { motion } from 'motion/react';

export function AnimatedLogo({ size = "w-16 h-16" }: { size?: string }) {
  return (
    <motion.div 
      className={`${size} relative`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Outer ring with pulsing effect */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0.3, 0.8, 0.3],
            strokeWidth: [2, 3, 2]
          }}
          transition={{
            pathLength: { duration: 2 },
            opacity: { duration: 2, repeat: Infinity },
            strokeWidth: { duration: 2, repeat: Infinity }
          }}
        />
        
        {/* Inner geometric pattern */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Central diamond */}
          <motion.rect
            x="35"
            y="35"
            width="30"
            height="30"
            fill="url(#gradient2)"
            transform="rotate(45 50 50)"
            animate={{
              rotate: [45, 50, 40, 45],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Orbiting dots */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <motion.circle
              key={index}
              cx={50 + 25 * Math.cos((angle * Math.PI) / 180)}
              cy={50 + 25 * Math.sin((angle * Math.PI) / 180)}
              r="3"
              fill="url(#gradient3)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Center letters */}
          <motion.text
            x="50"
            y="58"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="url(#gradient4)"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            NO
          </motion.text>
        </motion.g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          
          <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
          
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
          filter: 'blur(8px)'
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}