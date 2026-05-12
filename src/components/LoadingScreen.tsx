import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Total animation time:
    // House delay (0.2s) + duration (0.8s) = 1.0s
    // Top text delay (0.8s) + duration (0.8s) = 1.6s
    // Bottom text delay (1.4s) + duration (0.8s) = 2.2s
    // Give it a bit of hold time, then exit
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        
        {/* House Icon */}
        <motion.img
          src="/loadscreen/loadscreenhouse.png"
          alt="Jac-It House"
          className="absolute inset-0 w-full h-full object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        />

        {/* Top Text (Jac-It) */}
        <motion.img
          src="/loadscreen/loadscreentoptext.png"
          alt="Jac-It Name"
          className="absolute inset-0 w-full h-full object-contain"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        />

        {/* Bottom Text (House Leveling & Foundation Repair) */}
        <motion.img
          src="/loadscreen/loadscreenbottomtext.png"
          alt="Jac-It Foundation"
          className="absolute inset-0 w-full h-full object-contain"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
        />

      </div>
    </motion.div>
  );
}
