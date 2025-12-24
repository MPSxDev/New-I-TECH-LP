import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconContainerProps {
  icon: LucideIcon;
  index?: number;
  hoverColor?: string;
  className?: string;
}

export function IconContainer({ icon: Icon, index = 0, hoverColor, className }: IconContainerProps) {
  // Use explicit color classes since Tailwind doesn't support dynamic class generation
  const hoverClass = hoverColor 
    ? `group-hover:${hoverColor}`
    : index === 0 
      ? 'group-hover:text-sky-500'
      : index === 1
        ? 'group-hover:text-indigo-500'
        : 'group-hover:text-pink-500';

  return (
    <div className={cn('mb-6', className)}>
      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
        <Icon
          className={cn('w-6 h-6 text-white/60 transition-colors duration-300', hoverClass)}
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}

