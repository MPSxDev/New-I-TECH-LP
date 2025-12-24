import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, hover = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'h-full flex flex-col p-8 rounded-[30px] border border-white/5 bg-card transition-all duration-300',
        hover && 'group hover:border-purple-500/20 hover:shadow-[0_0_50px_0_rgba(139,92,246,0.15)] hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
