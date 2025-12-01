import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code } from 'lucide-react';
import { Card } from './ui/Card';

const gradientClasses = {
  bluePurple: 'from-electric-blue to-neon-purple',
  purpleBlue: 'from-neon-purple to-electric-blue',
  blueCyan: 'from-electric-blue to-cyan-500',
  purplePink: 'from-neon-purple to-pink-500',
};

const projects = [
  {
    title: 'Sistema ERP Empresarial',
    description: 'Plataforma completa de gestión empresarial con módulos de inventario, facturación y recursos humanos.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: gradientClasses.bluePurple,
  },
  {
    title: 'E-commerce B2B',
    description: 'Marketplace empresarial con gestión de catálogos, pedidos y logística integrada.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Azure'],
    gradient: gradientClasses.purpleBlue,
  },
  {
    title: 'App Móvil Fintech',
    description: 'Aplicación móvil para gestión financiera personal con integración bancaria y análisis de gastos.',
    technologies: ['React Native', 'Node.js', 'GraphQL', 'Docker'],
    gradient: gradientClasses.blueCyan,
  },
  {
    title: 'Plataforma SaaS Analytics',
    description: 'Solución de business intelligence con dashboards interactivos y reportes en tiempo real.',
    technologies: ['Vue.js', 'Python', 'Elasticsearch', 'Kubernetes'],
    gradient: gradientClasses.purplePink,
  },
];

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portafolio" className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
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
            <span className="text-white">Casos de </span>
            <span className="gradient-text">Éxito</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proyectos que han transformado negocios y generado valor real
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Content */}
              <Card className="relative z-10 p-10 h-full min-h-[380px] flex flex-col justify-between glass-strong border border-white/10 group-hover:border-electric-blue/40 transition-all duration-500">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-cyan-500 flex items-center justify-center shadow-elevated">
                      <Code className="w-6 h-6 text-dark-bg" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-electric-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                {/* Technologies - refined */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-dark-muted/60 text-muted-foreground border border-white/10 group-hover:border-electric-blue/40 group-hover:bg-dark-muted/80 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
