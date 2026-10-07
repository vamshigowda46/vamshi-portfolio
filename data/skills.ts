export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "SQL", "HTML", "CSS", "Julia"],
  },
  {
    title: "AI & APIs",
    items: ["Generative AI", "Gemini API", "REST APIs"],
  },
  {
    title: "Frameworks",
    items: ["Flask", "React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLAlchemy"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];
