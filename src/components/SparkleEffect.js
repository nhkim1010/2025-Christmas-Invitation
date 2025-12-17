import { motion } from 'framer-motion';
import { useEffect, useState } from "react";


export function SparkleEffect() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      });
    }
    setSparkles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <svg
            width={sparkle.size * 4}
            height={sparkle.size * 4}
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0 L11 9 L20 10 L11 11 L10 20 L9 11 L0 10 L9 9 Z"
              fill="#fbbf24"
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}