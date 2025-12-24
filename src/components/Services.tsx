import { useInView } from 'react-intersection-observer';
import { Code, Users, Lightbulb, type LucideIcon } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Card } from './ui/Card';
import { IconContainer } from './ui/IconContainer';
import { AnimationWrapper } from './ui/AnimationWrapper';

interface Service {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Software Factory',
    subtitle: 'Desarrollo a Medida',
    description:
      'Desarrollamos soluciones software personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio. Desde aplicaciones web hasta sistemas empresariales complejos.',
  },
  {
    icon: Users,
    title: 'Staff Augmentation',
    subtitle: 'Equipos Dedicados',
    description:
      'Amplía tu equipo de desarrollo con talento especializado. Proporcionamos desarrolladores expertos que se integran perfectamente con tu equipo existente.',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría Tecnológica',
    subtitle: 'Transformación Digital',
    description:
      'Te ayudamos a definir la estrategia tecnológica adecuada para tu empresa. Analizamos, planificamos e implementamos soluciones que impulsan tu transformación digital.',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="servicios" ref={ref} className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Servicios"
          title="Nuestros Servicios"
          description="Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-1">
          {services.map((service, index) => (
            <AnimationWrapper key={index} index={index} inView={inView}>
              <Card>
                <IconContainer icon={service.icon} index={index} />
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
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
