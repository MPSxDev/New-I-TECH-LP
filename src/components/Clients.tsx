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
    <section className="py-16 sm:py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Clientes
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Trabajamos con los Mejores
          </h2>
          <p className="text-white/70">
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
              className="flex items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-24 h-16 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center transition-all duration-300">
                  <span className="text-lg font-bold text-white/80">
                    {client.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-white/70">
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
