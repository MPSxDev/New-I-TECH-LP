import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clients = [
  'TechCorp',
  'InnovateLab',
  'DigitalSolutions',
  'CloudVentures',
  'DataStream',
  'NextGen Systems',
  'SmartBiz',
  'FutureWorks',
];

export function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-20 bg-dark-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Trabajamos con los </span>
            <span className="gradient-text">Mejores</span>
          </h2>
          <p className="text-muted-foreground">
            Empresas que confían en nosotros para su transformación digital
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center p-6 rounded-lg glass border border-white/10 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-24 h-16 mx-auto mb-2 rounded bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:from-electric-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                  <span className="text-lg font-bold text-white/80 group-hover:text-electric-blue transition-colors duration-300">
                    {client.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                  {client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
