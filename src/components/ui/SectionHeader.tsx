import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string | ReactNode;
  description: string;
  badge?: string;
  className?: string;
}

export function SectionHeader({ title, description, badge, className }: SectionHeaderProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn('text-center mb-16', className)}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
            {badge}
          </span>
        </motion.div>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
        {title}
      </h2>
      <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

