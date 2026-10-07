'use client';

import { ArrowUpRight, BrainCircuit, Download, Mail, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { HeroVisual } from '@/components/hero-visual';
import { ProjectShowcase } from '@/components/project-showcase';
import { SectionHeading } from '@/components/section-heading';
import { site } from '@/data/site';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { achievements } from '@/data/achievements';

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="top" className="page-shell">
      <Navbar />

      <main>
        <section className="container hero-section">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="hero-copy"
          >
            <p className="eyebrow">AI / ML UNDERGRADUATE</p>
            <h1 className="hero-title">{site.headline}</h1>
            <p className="hero-summary">
              {site.summary}
            </p>

            <div className="hero-meta">
              <span className="meta-pill with-icon">
                <MapPin size={15} /> {site.location}
              </span>
              <span className="meta-pill status-pill">
                <span className="status-dot" /> {site.availability}
              </span>
            </div>

            <div className="cta-row">
              <a href="#work" className="primary-btn">
                VIEW MY WORK <ArrowUpRight size={18} />
              </a>
              <a href={site.resume} className="secondary-btn" download>
                DOWNLOAD RESUME <Download size={18} />
              </a>
            </div>
          </motion.div>

          <HeroVisual />
        </section>

        <section id="about" className="section-shell">
          <div className="container">
            <SectionHeading eyebrow="ABOUT" title="BUILDING AT THE INTERSECTION OF AI, SOFTWARE, AND REAL-WORLD PROBLEMS." />

            <div className="about-layout">
              <div className="about-copy">
                <p>{site.about}</p>
                <p>{site.story}</p>
              </div>

              <div className="about-aside">
                <div className="aside-card">
                  <div className="aside-icon">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <p className="aside-label">CURRENT FOCUS</p>
                    <h3>ASPIRING AI ENGINEER | AI APPLICATION DEVELOPER</h3>
                  </div>
                </div>

                <div className="fact-list">
                  <div>
                    <span className="fact-label">Education</span>
                    <strong>VTU, Belagavi</strong>
                  </div>
                  <div>
                    <span className="fact-label">Degree</span>
                    <strong>B.Tech in AI & ML</strong>
                  </div>
                  <div>
                    <span className="fact-label">CGPA</span>
                    <strong>8.42</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section-shell soft-panel">
          <div className="container">
            <SectionHeading eyebrow="SELECTED WORK" title="PROJECTS THAT BLEND INTELLIGENCE, UX, AND DEPLOYABLE SYSTEMS." />

            <div className="project-stack">
              {projects.map((project, index) => (
                <ProjectShowcase key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="container">
            <SectionHeading eyebrow="SKILLS" title="TOOLS, STACKS, AND THINKING SHAPING HOW I BUILD." align="center" />

            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-group">
                  <p className="skill-label">{group.title}</p>
                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section-shell soft-panel">
          <div className="container timeline-layout">
            <div>
              <SectionHeading eyebrow="ACHIEVEMENTS" title="CERTIFICATIONS, EXPERIENCE, AND BUILDING MOMENTS." />
              <div className="achievement-list">
                {achievements.map((item) => (
                  <article key={item.title} className="achievement-item">
                    <div>
                      <p className="achievement-year">{item.period}</p>
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="achievement-meta">{item.issuer}</p>
                      <p className="achievement-copy">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="EDUCATION" title="FOUNDATION IN AI & ML." />
              <div className="education-stack">
                {site.education.map((item) => (
                  <article key={item.school} className="education-item">
                    <p className="achievement-year">{item.period}</p>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                    <p>{item.field}</p>
                    <strong>{item.detail}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <p className="eyebrow">CONTACT</p>
              <h2>LET&apos;S BUILD SOMETHING INTELLIGENT.</h2>
              <p>
                Have an idea, opportunity, or interesting problem? Let&apos;s connect.
              </p>
              <div className="contact-links">
                <a href={`mailto:${site.email}`} className="primary-btn">
                  EMAIL ME <ArrowUpRight size={18} />
                </a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="secondary-btn">
                  LINKEDIN <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-row">
                <Mail size={18} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="contact-row">
                <MapPin size={18} />
                <span>{site.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <p className="footer-name">VAMSHI GOWDA S</p>
            <p className="footer-role">AI / ML UNDERGRADUATE</p>
          </div>
          <div className="footer-meta">
            <span>{site.location}</span>
            <span>© 2026 VAMSHI GOWDA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
