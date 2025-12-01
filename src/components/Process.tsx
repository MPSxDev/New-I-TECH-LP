import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Analizamos tus necesidades, objetivos y desafíos para definir la mejor estrategia tecnológica.',
    color: 'electric-blue',
    gradient: 'from-electric-blue to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Diseño',
    description: 'Creamos prototipos y diseños que combinan funcionalidad, usabilidad y estética moderna.',
    color: 'neon-purple',
    gradient: 'from-neon-purple to-pink-500',
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Desarrollamos la solución con metodologías ágiles, código limpio y mejores prácticas.',
    color: 'electric-blue',
    gradient: 'from-electric-blue to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Entrega',
    description: 'Desplegamos, optimizamos y brindamos soporte continuo para asegurar el éxito del proyecto.',
    color: 'neon-purple',
    gradient: 'from-neon-purple to-pink-500',
  },
];

export function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="proceso" className="py-24 sm:py-32 lg:py-40 bg-dark-card/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Nuestro </span>
            <span className="gradient-text">Proceso</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un enfoque estructurado que garantiza resultados excepcionales
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line (Desktop) - refined */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-neon-purple via-electric-blue to-neon-purple transform -translate-y-1/2 opacity-20"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue via-neon-purple to-electric-blue transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="text-center lg:text-left">
                    {/* Icon Container - refined */}
                    <div className="relative mb-8 flex justify-center lg:justify-start">
                      <div className="relative">
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-elevated-lg group-hover:scale-110 transition-all duration-500 relative z-10 bg-gradient-to-br ${step.gradient}`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                      </div>
                      {/* Connector Line (Mobile) - refined */}
                      {index < steps.length - 1 && (
                        <div className="lg:hidden absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-electric-blue to-neon-purple transform translate-x-6 opacity-30"></div>
                      )}
                      {/* Desktop connector dot */}
                      <div className="hidden lg:block absolute top-1/2 left-full w-3 h-3 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple transform -translate-y-1/2 translate-x-4 z-20 shadow-elevated"></div>
                    </div>

                    {/* Step Number - refined */}
                    <div className="mb-3">
                      <span className="text-xs font-bold text-electric-blue uppercase tracking-wider">
                        Paso {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
