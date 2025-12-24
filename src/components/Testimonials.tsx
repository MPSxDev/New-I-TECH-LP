import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Card } from './ui/Card';
import { IconContainer } from './ui/IconContainer';
import { AnimationWrapper } from './ui/AnimationWrapper';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Contratamos a I-TECH para desarrollar nuestra nueva plataforma interna y el resultado superó lo que esperábamos. Diseñaron y construyeron desde la arquitectura hasta las integraciones con nuestros sistemas existentes, con un código limpio y bien documentado. Ahora lanzamos nuevas funcionalidades mucho más rápido y con menos incidencias en producción.",
    author: "María González",
    role: "CTO",
    company: "TechCorp Solutions"
  },
  {
    quote: "La transformación digital de nuestra empresa fue increíble con I-TECH. Su equipo no solo desarrolló un sistema ERP completo, sino que también nos ayudó a entender cómo aprovechar la tecnología para mejorar nuestros procesos. Los resultados han superado nuestras expectativas.",
    author: "Carlos Ramírez",
    role: "CEO",
    company: "InnovateLab"
  },
  {
    quote: "Trabajar con I-TECH fue una experiencia excepcional. Su enfoque profesional y su capacidad para entender nuestras necesidades específicas nos permitió lanzar nuestro e-commerce B2B en tiempo récord. Definitivamente los recomendaríamos.",
    author: "Ana Martínez",
    role: "Directora de Operaciones",
    company: "DigitalSolutions"
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Testimonios"
          title="Lo que dicen Nuestros Clientes"
          description="Casos de éxito que demuestran el valor que generamos"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-1">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} index={index} inView={inView}>
              <Card className="flex flex-col">
                <IconContainer icon={Quote} index={index} />
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-semibold text-white mb-1">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                  <p className="text-sm text-[#00d4ff] font-medium">{testimonial.company}</p>
                </div>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
