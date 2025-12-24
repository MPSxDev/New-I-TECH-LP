import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Cpu, type LucideIcon } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Card } from './ui/Card';
import { IconContainer } from './ui/IconContainer';
import { AnimationWrapper } from './ui/AnimationWrapper';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Code2,
    title: 'Desarrollo Ágil',
    description: 'Metodologías ágiles y DevOps para entregar software de calidad en tiempo récord. Código limpio, escalable y mantenible.',
  },
  {
    icon: Cpu,
    title: 'Arquitectura Moderna',
    description: 'Microservicios, cloud-native y tecnologías de vanguardia. Diseñamos sistemas robustos que crecen con tu negocio.',
  },
  {
    icon: Rocket,
    title: 'Despliegue Continuo',
    description: 'CI/CD automatizado para entregas rápidas y seguras. Infraestructura como código y monitoreo en tiempo real.',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Características"
          title="Soluciones Técnicas, Resultados Excepcionales"
          description="Tecnología de vanguardia y metodologías probadas para crear software que impulsa tu negocio"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-1">
          {features.map((feature, index) => (
            <AnimationWrapper key={index} index={index} inView={inView}>
              <Card>
                <IconContainer icon={feature.icon} index={index} />
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
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
