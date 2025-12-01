import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, hover = true, glass = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-500',
        glass && 'glass-strong border border-white/10',
        hover && 'card-hover cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
