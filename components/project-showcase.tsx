'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      className={`project-case project-${project.accent} ${project.layout === 'text-right' ? 'reverse' : ''}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div className="project-visual" aria-hidden="true">
        <div className="signal-panel">
          <div className="signal-header">
            <span className="signal-dot dot-one" />
            <span className="signal-dot dot-two" />
            <span className="signal-dot dot-three" />
          </div>
          <div className="signal-body">
            <div className="mini-chart" />
            <div className="mini-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="project-copy">
        <p className="project-number">{projectNumber}</p>
        <p className="project-name">{project.name}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-meta">
          <span>{project.date}</span>
          <span>{project.technologies.join(' • ')}</span>
        </div>
        <ul className="project-features">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a href="#contact" className="inline-link">
          Discuss this project <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
