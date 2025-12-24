import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Card } from './ui/Card';
import { AnimationWrapper } from './ui/AnimationWrapper';

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: 'Discovery',
    description: 'Analizamos tus necesidades, objetivos y desafíos para definir la mejor estrategia tecnológica.',
  },
  {
    title: 'Diseño',
    description: 'Creamos prototipos y diseños que combinan funcionalidad, usabilidad y estética moderna.',
  },
  {
    title: 'Desarrollo',
    description: 'Desarrollamos la solución con metodologías ágiles, código limpio y mejores prácticas.',
  },
  {
    title: 'Entrega',
    description: 'Desplegamos, optimizamos y brindamos soporte continuo para asegurar el éxito del proyecto.',
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
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#00d4ff] text-[#0a0a0a] font-bold text-lg flex items-center justify-center mx-auto">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Mobile/Tablet: Individual cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
          {steps.map((step, index) => (
            <AnimationWrapper key={index} index={index} inView={inView}>
              <Card>
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#00d4ff] text-[#0a0a0a] font-bold text-lg flex items-center justify-center mx-auto">
                      {index + 1}
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
          ))}
        </div>
      </div>
    </section>
  );
}
