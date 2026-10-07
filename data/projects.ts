export type Project = {
  id: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  date: string;
  technologies: string[];
  accent: "orange" | "blue" | "green";
  layout: "text-left" | "text-right";
  features: string[];
};

export const projects: Project[] = [
  {
    id: "trustlens-ai",
    name: "TRUSTLENS AI",
    title: "AI-POWERED DIGITAL TRUST",
    description:
      "An AI-powered cybersecurity platform designed to detect fake jobs, scam messages, phishing links, and fraudulent loan or trading applications.",
    summary:
      "TrustLens AI helps people assess digital risk with AI-assisted analysis, suspicious website checks, and trust scoring across financial and communication threats.",
    date: "March 2026",
    technologies: ["Python", "Flask", "MySQL", "Gemini API", "REST APIs"],
    accent: "orange",
    layout: "text-left",
    features: [
      "Gemini API integration",
      "AI-assisted scam analysis",
      "Suspicious website analysis",
      "Fake job detection",
      "Financial fraud indicators",
      "RBI & SEBI registration verification",
      "QR / UPI security analysis",
      "App permission analysis",
      "Dynamic trust scoring",
      "Responsive dashboard",
      "Threat visualization",
      "Multilingual WhatsApp bot support",
    ],
  },
  {
    id: "innovx-ai",
    name: "INNOVX AI",
    title: "STUDENT COLLABORATION & INNOVATION ECOSYSTEM",
    description:
      "A full-stack platform that connects students with projects, teammates, mentors, and startup opportunities through a collaborative, AI-assisted experience.",
    summary:
      "InnovX AI supports student discovery, project ideation, team matching, and collaboration with a responsive and role-aware interface.",
    date: "April 2026",
    technologies: ["React", "Vite", "Tailwind CSS", "Python Flask", "MySQL"],
    accent: "blue",
    layout: "text-right",
    features: [
      "Flask REST APIs",
      "JWT authentication",
      "Role-based authorization",
      "SQLAlchemy",
      "MySQL integration",
      "AI-based team matching",
      "AI project idea generation",
      "Search and filtering",
      "Profiles and collaboration",
      "Responsive React interface",
    ],
  },
];
