import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Card } from './ui/Card';
import { AnimationWrapper } from './ui/AnimationWrapper';

interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    title: 'Discovery',
    description: 'Analizamos tus necesidades, objetivos y desafíos para definir la mejor estrategia tecnológica.',
    icon: Search,
  },
  {
    title: 'Diseño',
    description: 'Creamos prototipos y diseños que combinan funcionalidad, usabilidad y estética moderna.',
    icon: Palette,
  },
  {
    title: 'Desarrollo',
    description: 'Desarrollamos la solución con metodologías ágiles, código limpio y mejores prácticas.',
    icon: Code2,
  },
  {
    title: 'Entrega',
    description: 'Desplegamos, optimizamos y brindamos soporte continuo para asegurar el éxito del proyecto.',
    icon: Rocket,
  },
];

export function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="proceso" ref={ref} className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Proceso"
          title="Nuestro Proceso"
          description="Un enfoque estructurado que garantiza resultados excepcionales"
        />

        {/* Desktop: Single card with all steps */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card hover={false} className="p-12">
              <div className="grid grid-cols-4 gap-8 relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center relative">
                      <div className="mb-6 relative flex items-center justify-center">
                        {/* Connecting line - horizontal between steps */}
                        {index < steps.length - 1 && (
                          <div 
                            className="absolute top-1/2 left-1/2 h-1.5 bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] via-[#0088aa] to-[#00d4ff] transform -translate-y-1/2 z-0"
                            style={{ 
                              width: 'calc(100% + 2rem)',
                            }}>
                          </div>
                        )}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] via-[#00a8cc] to-[#0088aa] text-white flex items-center justify-center mx-auto relative z-10 border-2 border-transparent shadow-lg shadow-[#00d4ff]/30">
                          <Icon className="w-7 h-7" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Mobile/Tablet: Individual cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimationWrapper key={index} index={index} inView={inView}>
                <Card className="relative">
                  {/* Vertical connecting line for mobile (single column) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-6 left-1/2 w-1.5 h-6 bg-gradient-to-b from-[#00d4ff] via-[#00a8cc] via-[#0088aa] to-[#00d4ff] transform -translate-x-1/2 z-0"></div>
                  )}
                  {/* Vertical connecting line for tablet (two columns) - left column */}
                  {index < steps.length - 2 && index % 2 === 0 && (
                    <div className="hidden md:block absolute -bottom-6 left-1/2 w-1.5 h-6 bg-gradient-to-b from-[#00d4ff] via-[#00a8cc] via-[#0088aa] to-[#00d4ff] transform -translate-x-1/2 z-0"></div>
                  )}
                  {/* Vertical connecting line for tablet (two columns) - right column */}
                  {index < steps.length - 2 && index % 2 === 1 && (
                    <div className="hidden md:block absolute -bottom-6 left-1/2 w-1.5 h-6 bg-gradient-to-b from-[#00d4ff] via-[#00a8cc] via-[#0088aa] to-[#00d4ff] transform -translate-x-1/2 z-0"></div>
                  )}
                  <div className="text-center relative">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] via-[#00a8cc] to-[#0088aa] text-white flex items-center justify-center mx-auto relative z-10 border-2 border-transparent shadow-lg shadow-[#00d4ff]/30">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
