import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Lightbulb, ArrowRight, Rocket } from 'lucide-react';
import { Card } from './ui/Card';

const services = [
  {
    icon: Code,
    title: 'Software Factory',
    subtitle: 'Desarrollo a Medida',
    description:
      'Desarrollamos soluciones software personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio. Desde aplicaciones web hasta sistemas empresariales complejos.',
    color: 'electric-blue',
    gradient: 'from-electric-blue to-cyan-500',
  },
  {
    icon: Users,
    title: 'Staff Augmentation',
    subtitle: 'Equipos Dedicados',
    description:
      'Amplía tu equipo de desarrollo con talento especializado. Proporcionamos desarrolladores expertos que se integran perfectamente con tu equipo existente.',
    color: 'neon-purple',
    gradient: 'from-neon-purple to-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría Tecnológica',
    subtitle: 'Transformación Digital',
    description:
      'Te ayudamos a definir la estrategia tecnológica adecuada para tu empresa. Analizamos, planificamos e implementamos soluciones que impulsan tu transformación digital.',
    color: 'electric-blue',
    gradient: 'from-electric-blue to-cyan-500',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="servicios" className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
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
            <span className="text-white">Nuestros </span>
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon Container - refined */}
                  <div className="relative mb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-elevated ${
                        service.color === 'electric-blue'
                          ? 'bg-gradient-to-br from-electric-blue to-cyan-500'
                          : 'bg-gradient-to-br from-neon-purple to-purple-600'
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          service.color === 'electric-blue' ? 'text-dark-bg' : 'text-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow flex flex-col">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-electric-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-electric-blue mb-6 font-semibold uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground flex-grow leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                    
                    {/* CTA Link - refined */}
                    <div className="mt-auto pt-6 border-t border-white/10 group-hover:border-electric-blue/30 transition-colors duration-300">
                      <span className="inline-flex items-center gap-2 text-electric-blue text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Saber más
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlight Section - Software Factory style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 bg-surface-neutral rounded-xl overflow-hidden border border-border-muted relative backdrop-blur-lg py-7 px-3 sm:px-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-cyan-500 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-dark-bg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Tecnología Avanzada, Desarrollo Ágil
                </h3>
                <p className="text-muted-foreground text-sm">
                  Acelera tu transformación digital con desarrollo de software de clase mundial, metodologías ágiles y las mejores prácticas de la industria.
                </p>
              </div>
            </div>
            <button className="px-6 py-3 rounded-xl bg-electric-blue text-dark-bg font-semibold hover:bg-[#00b8e6] transition-colors duration-300 whitespace-nowrap">
              Explorar servicios
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
