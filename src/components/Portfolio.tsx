import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { Card } from './ui/Card';
import { IconContainer } from './ui/IconContainer';
import { AnimationWrapper } from './ui/AnimationWrapper';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Sistema ERP Empresarial',
    description: 'Plataforma completa de gestión empresarial con módulos de inventario, facturación y recursos humanos.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'E-commerce B2B',
    description: 'Marketplace empresarial con gestión de catálogos, pedidos y logística integrada.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Azure'],
  },
  {
    title: 'App Móvil Fintech',
    description: 'Aplicación móvil para gestión financiera personal con integración bancaria y análisis de gastos.',
    technologies: ['React Native', 'Node.js', 'GraphQL', 'Docker'],
  },
  {
    title: 'Plataforma SaaS Analytics',
    description: 'Solución de business intelligence con dashboards interactivos y reportes en tiempo real.',
    technologies: ['Vue.js', 'Python', 'Elasticsearch', 'Kubernetes'],
  },
];

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portafolio" ref={ref} className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          badge="Portafolio"
          title="Casos de Éxito"
          description="Proyectos que han transformado negocios y generado valor real"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-1">
          {projects.map((project, index) => (
            <AnimationWrapper key={index} index={index} inView={inView} className="cursor-pointer">
              <Card className="min-h-[350px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <IconContainer icon={Code} index={index} className="mb-0" />
                    <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-white/70 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
