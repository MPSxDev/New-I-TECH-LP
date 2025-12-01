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
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-electric-blue text-dark-bg hover:bg-[#00b8e6] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] shadow-elevated',
    secondary: 'bg-neon-purple text-white hover:bg-[#7c3aed] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] shadow-elevated',
    outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-bg bg-transparent',
    ghost: 'text-white hover:bg-dark-card hover:text-electric-blue bg-transparent',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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
