import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'Next.js',
  'Vue.js',
  'Angular',
  'Django',
  'Flask',
  'Express',
  'NestJS',
  'Redis',
  'Elasticsearch',
  'Terraform',
  'Git',
  'CI/CD',
  'Microservices',
];

export function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Duplicate array for seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="tecnologias" className="py-24 sm:py-32 lg:py-40 bg-dark-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Tecnologías que </span>
            <span className="gradient-text">Dominamos</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las mejores herramientas y frameworks del mercado
          </p>
        </motion.div>

        {/* Infinite Scroll Container - First Row */}
        <div className="relative overflow-hidden mb-6">
          {/* Fade edges - refined */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Technologies */}
          <div className="flex gap-6 animate-scroll-infinite">
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 px-8 py-5 rounded-xl glass-strong border border-white/10 hover:border-electric-blue/40 transition-all duration-300 group cursor-default"
              >
                <span className="text-xl sm:text-2xl font-semibold text-white whitespace-nowrap group-hover:text-electric-blue transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second row (reverse direction) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-scroll-infinite" style={{ animationDirection: 'reverse' }}>
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={`${tech}-reverse-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 px-8 py-5 rounded-xl glass-strong border border-white/10 hover:border-neon-purple/40 transition-all duration-300 group cursor-default"
              >
                <span className="text-xl sm:text-2xl font-semibold text-white whitespace-nowrap group-hover:text-neon-purple transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
