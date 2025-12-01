import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from 'lucide-react';

const footerLinks = {
  servicios: [
    { label: 'Software Factory', href: '#servicios' },
    { label: 'Staff Augmentation', href: '#servicios' },
    { label: 'Consultoría Tecnológica', href: '#servicios' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#hero' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Proceso', href: '#proceso' },
  ],
  contacto: [
    { label: 'Contacto', href: '#contacto' },
    { label: 'Email', href: 'mailto:contacto@i-tech.com' },
    { label: 'WhatsApp', href: 'https://wa.me/56945658711' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/i-tech', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/i-tech', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/i-tech', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/i-tech', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/i-tech', label: 'GitHub' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark-card border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/i-tech.svg"
                alt="I-TECH Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-base">
              Construimos el futuro digital de tu empresa. Software factory especializada en
              soluciones tecnológicas empresariales que transforman negocios.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-strong border border-white/10 flex items-center justify-center text-muted-foreground hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300 hover:scale-110 hover:shadow-elevated"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-4">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-base block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-base block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              {footerLinks.contacto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-base block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} I-TECH. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:contacto@i-tech.com"
              className="hover:text-electric-blue transition-colors duration-300"
            >
              contacto@i-tech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
