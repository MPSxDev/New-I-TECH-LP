import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Cpu } from 'lucide-react';
import { Card } from './ui/Card';

const features = [
  {
    icon: Code2,
    title: 'Desarrollo Ágil',
    description: 'Metodologías ágiles y DevOps para entregar software de calidad en tiempo récord. Código limpio, escalable y mantenible.',
    color: 'electric-blue',
  },
  {
    icon: Cpu,
    title: 'Arquitectura Moderna',
    description: 'Microservicios, cloud-native y tecnologías de vanguardia. Diseñamos sistemas robustos que crecen con tu negocio.',
    color: 'neon-purple',
  },
  {
    icon: Rocket,
    title: 'Despliegue Continuo',
    description: 'CI/CD automatizado para entregas rápidas y seguras. Infraestructura como código y monitoreo en tiempo real.',
    color: 'electric-blue',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
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
            <span className="text-white">Soluciones Técnicas, </span>
            <span className="gradient-text">Resultados Excepcionales</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnología de vanguardia y metodologías probadas para crear software que impulsa tu negocio
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                className="group"
              >
                <Card 
                  hover 
                  glass
                  className="h-full flex flex-col p-8 relative overflow-hidden transition-all duration-500"
                >
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-elevated ${
                        feature.color === 'electric-blue'
                          ? 'bg-gradient-to-br from-electric-blue to-cyan-500'
                          : 'bg-gradient-to-br from-neon-purple to-purple-600'
                      }`}
                    >
                      <Icon className={`w-7 h-7 ${feature.color === 'electric-blue' ? 'text-dark-bg' : 'text-white'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-electric-blue transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
