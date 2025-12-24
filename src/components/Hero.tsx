import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32"
      style={{ background: '#05050A' }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-10 -top-24 h-56 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/15 to-purple-500/20 blur-3xl"></div>
        <div className="absolute inset-x-10 bottom-0 h-80 rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/15 to-sky-500/20 blur-3xl" style={{ transform: 'translateY(50%)' }}></div>
      </div>
      
      {/* Gradient fade overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(5, 5, 10, 0.5) 50%, rgba(5, 5, 10, 1) 100%)' }}></div>

      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Soluciones tecnológicas
            </span>
          </motion.div>

          {/* Main Title with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-white"
          >
            Construimos el{' '}
            <span className="gradient-text">futuro digital</span>
            {' '}de tu empresa
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Transformamos ideas en soluciones de software empresarial.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Desarrollo a medida, arquitectura moderna y tecnología de vanguardia para impulsar tu negocio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#0088aa] text-white text-sm font-semibold uppercase tracking-wide rounded-full shadow-[0_22px_55px_-20px_rgba(0,212,255,0.85)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_25px_60px_-15px_rgba(0,212,255,0.95)] inline-flex items-center gap-2 min-w-[240px] justify-center"
            >
              Conversemos sobre tu proyecto
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#servicios');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all duration-200 min-w-[240px]"
            >
              Ver servicios
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
