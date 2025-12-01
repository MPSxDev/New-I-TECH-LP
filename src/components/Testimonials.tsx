import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { Card } from './ui/Card';

const testimonials = [
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
    <section className="py-24 sm:py-32 lg:py-40 bg-dark-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Lo que dicen </span>
            <span className="gradient-text">Nuestros Clientes</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Casos de éxito que demuestran el valor que generamos
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card glass className="h-full p-8 border border-white/10 hover:border-electric-blue/30 transition-all duration-300 flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-electric-blue" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-white mb-8 leading-relaxed flex-grow text-base italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-white/10 pt-6">
                  <p className="font-bold text-white mb-1">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-electric-blue font-semibold">{testimonial.company}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
