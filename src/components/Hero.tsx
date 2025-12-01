import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: '#0a0a0a' }}
    >
      {/* Animated gradient base layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.25) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.25) 0%, transparent 60%), radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 60%), radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.25) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'blur(100px)',
          opacity: 0.4,
        }}
      />

      {/* Second animated gradient layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 80%, rgba(0, 212, 255, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.25) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          filter: 'blur(120px)',
          opacity: 0.3,
        }}
      />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Dark overlay to maintain contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg z-[1]"></div>

      {/* Grainy texture overlay - more visible */}
      <div 
        className="absolute inset-0 grain-texture z-[2] pointer-events-none"
        style={{
          opacity: 0.25,
        }}
      ></div>

      {/* Soft moving gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -120, 100, 0],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, -150, 120, 0],
            y: [0, 150, -100, 0],
            scale: [1.2, 1, 1.5, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1, 1.6, 0.7, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Badge - refined */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-card/50 border border-border mb-8 hover:border-electric-blue/40 transition-all duration-300 backdrop-blur-lg"
            >
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-muted-foreground">
                Soluciones tecnológicas
              </span>
            </motion.div>

            {/* Main Title - improved hierarchy */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="text-white block mb-2">Construimos el </span>
              <span className="gradient-text block">futuro digital</span>
              <span className="text-white block mt-2">de tu empresa</span>
            </motion.h1>

            {/* Subtitle - refined */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Transformamos ideas en soluciones de software empresarial. Desarrollo a medida, arquitectura moderna y tecnología de vanguardia para impulsar tu negocio.
            </motion.p>

            {/* CTA Buttons - improved hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            >
              <Button
                onClick={scrollToContact}
                variant="primary"
                size="lg"
                glow
                className="group min-w-[240px]"
              >
                Conversemos sobre tu proyecto
                <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector('#servicios');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
                className="min-w-[240px]"
              >
                Ver servicios
              </Button>
            </motion.div>

            {/* Stats - more sophisticated design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5"
            >
              {[
                { number: '50+', label: 'Proyectos Entregados' },
                { number: '30+', label: 'Clientes Satisfechos' },
                { number: '5+', label: 'Años de Experiencia' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold gradient-text-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
