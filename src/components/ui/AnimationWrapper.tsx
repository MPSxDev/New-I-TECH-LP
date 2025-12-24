import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimationWrapperProps {
  children: ReactNode;
  index?: number;
  inView: boolean;
  delay?: number;
  className?: string;
}

export function AnimationWrapper({ 
  children, 
  index = 0, 
  inView, 
  delay,
  className 
}: AnimationWrapperProps) {
  const calculatedDelay = delay !== undefined ? delay : index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        delay: calculatedDelay, 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn('group relative', className)}
    >
      {children}
    </motion.div>
  );
}

