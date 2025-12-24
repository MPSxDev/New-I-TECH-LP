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
    <section id="tecnologias" className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Tecnologías
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Tecnologías que Dominamos
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las mejores herramientas y frameworks del mercado
          </p>
        </motion.div>

        {/* Infinite Scroll Container - First Row */}
        <div className="relative overflow-hidden mb-6 py-2">
          {/* Fade edges - refined */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Technologies */}
          <div className="flex gap-6 animate-scroll-infinite">
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 px-8 py-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <span className="text-xl sm:text-2xl font-semibold text-white whitespace-nowrap">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second row (reverse direction) */}
        <div className="relative overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-card/30 via-dark-card/30 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-scroll-infinite" style={{ animationDirection: 'reverse' }}>
            {duplicatedTech.map((tech, index) => (
              <motion.div
                key={`${tech}-reverse-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 px-8 py-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <span className="text-xl sm:text-2xl font-semibold text-white whitespace-nowrap">
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
