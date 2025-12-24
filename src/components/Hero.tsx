import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

function CircuitPattern() {
  const svgRef = useRef<SVGSVGElement>(null);

  // Definir nodos y conexiones
  const nodes = [
    { id: 0, x: 10, y: 15 },
    { id: 1, x: 25, y: 20 },
    { id: 2, x: 40, y: 10 },
    { id: 3, x: 55, y: 25 },
    { id: 4, x: 70, y: 15 },
    { id: 5, x: 85, y: 30 },
    { id: 6, x: 20, y: 40 },
    { id: 7, x: 45, y: 45 },
    { id: 8, x: 65, y: 50 },
    { id: 9, x: 80, y: 60 },
    { id: 10, x: 30, y: 70 },
    { id: 11, x: 50, y: 75 },
    { id: 12, x: 75, y: 80 },
  ];

  const connections = [
    { from: 0, to: 1, delay: 0 },
    { from: 1, to: 2, delay: 0.5 },
    { from: 2, to: 3, delay: 1 },
    { from: 3, to: 4, delay: 1.5 },
    { from: 4, to: 5, delay: 2 },
    { from: 1, to: 6, delay: 0.8 },
    { from: 3, to: 7, delay: 1.3 },
    { from: 4, to: 8, delay: 1.8 },
    { from: 5, to: 9, delay: 2.3 },
    { from: 6, to: 7, delay: 1.6 },
    { from: 7, to: 8, delay: 2.1 },
    { from: 8, to: 9, delay: 2.6 },
    { from: 6, to: 10, delay: 2.4 },
    { from: 7, to: 11, delay: 2.9 },
    { from: 8, to: 12, delay: 3.4 },
    { from: 10, to: 11, delay: 3.7 },
    { from: 11, to: 12, delay: 4.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.28]">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Filtro de glow para nodos */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradientes para cada línea - se generan dinámicamente */}
          {connections.map((_, index) => {
            const gradientId = `pulseGradient-${index}`;
            return (
              <linearGradient key={gradientId} id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                <stop offset="40%" stopColor="transparent" stopOpacity="0" />
                <stop offset="48%" stopColor="#00d4ff" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
                <stop offset="52%" stopColor="#9333ea" stopOpacity="1" />
                <stop offset="54%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="60%" stopColor="transparent" stopOpacity="0" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>

        {/* Líneas de conexión */}
        {connections.map((conn, index) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          const pathLength = Math.sqrt(
            Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2)
          );
          const duration = 3 + index * 0.2;
          const gradientId = `pulseGradient-${index}`;

          return (
            <g key={`line-${index}`}>
              {/* Línea base con baja opacidad */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#00d4ff"
                strokeWidth="0.12"
                opacity="0.3"
              />
              {/* Línea animada con pulso */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={`url(#${gradientId})`}
                strokeWidth="0.18"
                strokeLinecap="round"
                strokeDasharray={`${pathLength * 0.08} ${pathLength}`}
                opacity="0.85"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values={`0;${pathLength * 1.08}`}
                  dur={`${duration}s`}
                  begin={`${conn.delay}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          );
        })}

        {/* Nodos */}
        {nodes.map((node, index) => {
          // Encontrar todas las conexiones que involucran este nodo
          const nodeConnections = connections.filter(
            c => c.from === index || c.to === index
          );
          const minDelay = nodeConnections.length > 0 
            ? Math.min(...nodeConnections.map(c => c.delay))
            : index * 0.3;

          return (
            <g key={`node-${index}`}>
              {/* Círculo base del nodo */}
              <circle
                cx={node.x}
                cy={node.y}
                r="0.35"
                fill="#00d4ff"
                opacity="0.4"
              />
              {/* Anillo de pulso exterior */}
              <circle
                cx={node.x}
                cy={node.y}
                r="0.5"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.1"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6;0"
                  dur="1.2s"
                  begin={`${minDelay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="0.5;0.9;0.5"
                  dur="1.2s"
                  begin={`${minDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Nodo central brillante con pulso */}
              <circle
                cx={node.x}
                cy={node.y}
                r="0.25"
                fill="#00d4ff"
                opacity="0.4"
                filter="url(#glow)"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.8;0.2"
                  dur={`${2.5 + index * 0.15}s`}
                  begin={`${minDelay}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="0.25;0.35;0.25"
                  dur={`${2.5 + index * 0.15}s`}
                  begin={`${minDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Punto central más brillante */}
              <circle
                cx={node.x}
                cy={node.y}
                r="0.15"
                fill="#9333ea"
                opacity="0.7"
                filter="url(#glow)"
              >
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur={`${1.8 + index * 0.1}s`}
                  begin={`${minDelay + 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32"
      style={{ background: '#05050A' }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-10 -top-24 h-56 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/15 to-purple-500/20 blur-3xl"></div>
        <div className="absolute inset-x-10 bottom-0 h-80 rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/15 to-sky-500/20 blur-3xl" style={{ transform: 'translateY(50%)' }}></div>
      </div>
      
      {/* Gradient fade overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(5, 5, 10, 0.5) 50%, rgba(5, 5, 10, 1) 100%)' }}></div>

      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated Circuit Pattern */}
      <CircuitPattern />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Soluciones tecnológicas
            </span>
          </motion.div>

          {/* Main Title with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-white"
          >
            Construimos el{' '}
            <span className="gradient-text">futuro digital</span>
            {' '}de tu empresa
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Transformamos ideas en soluciones de software empresarial.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Desarrollo a medida, arquitectura moderna y tecnología de vanguardia para impulsar tu negocio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] via-[#00a8cc] to-[#0088aa] text-white text-sm font-semibold uppercase tracking-wide rounded-full shadow-[0_22px_55px_-20px_rgba(0,212,255,0.85)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_25px_60px_-15px_rgba(0,212,255,0.95)] inline-flex items-center gap-2 min-w-[240px] justify-center"
            >
              Conversemos sobre tu proyecto
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#servicios');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all duration-200 min-w-[240px]"
            >
              Ver servicios
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
