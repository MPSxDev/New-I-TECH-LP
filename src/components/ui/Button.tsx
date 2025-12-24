import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#0088aa] text-white uppercase tracking-wide rounded-full shadow-[0_22px_55px_-20px_rgba(0,212,255,0.85)] hover:brightness-110 hover:shadow-[0_25px_60px_-15px_rgba(0,212,255,0.95)] transition-all duration-200',
    secondary: 'bg-neon-purple text-white hover:bg-[#7c3aed] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] shadow-elevated rounded-full',
    outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-bg bg-transparent rounded-full',
    ghost: 'text-white hover:bg-dark-card hover:text-electric-blue bg-transparent rounded-full',
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        glow && 'shadow-[0_0_20px_rgba(0,212,255,0.25)]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
