import React from 'react';

const skills = [
  "React", "Vue.js", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "Express", "Nest.js", "Laravel", "PHP", "Python",
  "React Native", "Flutter", "Android", "iOS",
  "OpenAI API", "LangChain", "NLP", "TensorFlow",
  "PostgreSQL", "MongoDB", "MySQL", "Redis",
  "AWS", "Azure", "Docker", "Kubernetes", "CI/CD",
  "Git", "Jira", "Postman", "Figma", "Trello"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="container px-4 py-16">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-secondary/40 border border-border text-gray-300 text-sm hover:bg-secondary/60 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
