'use client';

import { motion, useReducedMotion } from 'framer-motion';

const labels = [
  { text: 'AI', x: '11%', y: '14%' },
  { text: 'APIs', x: '19%', y: '55%' },
  { text: 'PYTHON', x: '67%', y: '18%' },
  { text: 'SQL', x: '71%', y: '60%' },
  { text: 'GENAI', x: '50%', y: '76%' },
  { text: 'FLASK', x: '50%', y: '30%' },
];

const nodes = [
  { x: '18%', y: '30%' },
  { x: '40%', y: '22%' },
  { x: '68%', y: '38%' },
  { x: '56%', y: '64%' },
  { x: '30%', y: '72%' },
  { x: '79%', y: '70%' },
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={reduceMotion ? undefined : { y: -6, rotateX: 2 }}
    >
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="visual-shell">
        <div className="visual-grid" />
        {nodes.map((node, index) => (
          <span
            key={index}
            className="node"
            style={{ left: node.x, top: node.y }}
          />
        ))}
        <svg className="signal-lines" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
          <path d="M95 95 L250 120 L335 74 L470 110 L420 245 L280 180 L165 220 L110 300" />
          <path d="M95 95 L165 220 L240 260 L335 74" />
          <path d="M250 120 L256 196 L420 245" />
          <path d="M240 260 L420 245 L470 110" />
          <path d="M165 220 L110 300" />
        </svg>
        {labels.map((label, index) => (
          <span
            key={index}
            className="tech-tag"
            style={{ left: label.x, top: label.y }}
          >
            {label.text}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
