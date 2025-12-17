
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";


export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = [];
    // 더 많은 눈송이 생성
    for (let i = 0; i < 80; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 5 + 6,
        delay: Math.random() * 5,
        blur: Math.random() * 2,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            top: "-10px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
            boxShadow: `0 0 ${flake.blur * 2}px rgba(255,255,255,0.8)`,
            filter: `blur(${flake.blur}px)`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [
              0,
              Math.random() * 100 - 50,
              Math.random() * 50 - 25,
            ],
            opacity: [0, 0.9, 0.9, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}