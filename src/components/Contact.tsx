import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = '+56945658711'; // Placeholder
  const whatsappMessage = encodeURIComponent('Hola, me interesa conocer más sobre los servicios de I-TECH.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-24 sm:py-32 lg:py-40 bg-dark-bg relative">
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
            <span className="text-white">¿Listo para </span>
            <span className="gradient-text">Transformar tu Negocio?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card glass-strong className="h-full p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-dark-muted/60 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 text-base"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-dark-muted/60 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 text-base"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-dark-muted/60 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 resize-none text-base"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" glow className="w-full group mt-8">
                  Enviar mensaje
                  <Send className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <Card glass-strong hover className="text-center p-10">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-elevated-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Chatea con nosotros</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  ¿Prefieres una conversación rápida? Escríbenos por WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="secondary" size="lg" glow className="w-full sm:w-auto">
                    Abrir WhatsApp
                    <MessageCircle className="ml-2 w-5 h-5 inline-block" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Contact Information */}
            <Card glass-strong className="p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-electric-blue/20 flex items-center justify-center flex-shrink-0 border border-electric-blue/30">
                    <Mail className="w-7 h-7 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:contacto@i-tech.com"
                      className="text-white hover:text-electric-blue transition-colors duration-300 text-lg font-medium"
                    >
                      contacto@i-tech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-neon-purple/20 flex items-center justify-center flex-shrink-0 border border-neon-purple/30">
                    <Phone className="w-7 h-7 text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Teléfono</p>
                    <a
                      href="tel:+56945658711"
                      className="text-white hover:text-neon-purple transition-colors duration-300 text-lg font-medium"
                    >
                      +56945658711
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
