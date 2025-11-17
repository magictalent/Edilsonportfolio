import React from 'react';

type Experience = {
  company: string;
  role: string;
  period: string;
  tech: string[];
  details: string[];
};

const experiences: Experience[] = [
  {
    company: 'Freelancer, Brazil',
    role: 'Senior Full-Stack & Mobile Engineer',
    period: 'Jan 2020 – Present',
    tech: ['React', 'Vue.js', 'Node.js', 'Laravel', 'Python', 'React Native', 'Flutter', 'AWS', 'Docker'],
    details: [
      'Developed mobile and web apps for logistics, healthcare, delivery, and digital services.',
      'Built scalable systems using React, Vue.js, Node.js, Laravel, and Python.',
      'Implemented AI-driven features including automation tools and chatbots.',
      'Designed microservices architectures supporting 80k+ daily users.',
      'Improved backend performance by 40% and reduced server costs with optimization.',
      'Led an Agile development team and delivered multiple client projects on time.',
    ],
  },
  {
    company: 'BluePixel Software',
    role: 'Mobile & AI Software Engineer',
    period: 'Mar 2017 – Dec 2019',
    tech: ['React Native', 'Flutter', 'Node.js', 'PostgreSQL', 'NLP', 'Machine Learning', 'JWT', 'OAuth2'],
    details: [
      'Built cross-platform mobile apps using React Native and Flutter.',
      'Integrated machine learning models and NLP-based text processing systems.',
      'Created REST APIs with Node.js and PostgreSQL.',
      'Implemented secure authentication systems (JWT, OAuth2).',
      'Improved UI/UX and app performance to achieve smoother user experiences.',
    ],
  },
  {
    company: 'SoftLine Digital Studio',
    role: 'Full-Stack Developer',
    period: 'Aug 2013 – Feb 2017',
    tech: ['Laravel', 'Vue.js', 'JavaScript', 'PHP', 'MySQL'],
    details: [
      'Developed modern web applications using Laravel, Vue.js, and JavaScript.',
      'Optimized legacy systems, reducing load times by 50%.',
      'Built dashboards, admin systems, and backend APIs for local businesses.',
      'Collaborated directly with clients to gather requirements and deliver solutions.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="container px-4 py-16">
      <h2 className="text-3xl font-semibold text-white mb-8 text-center">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const startYear = exp.period.match(/\d{4}/)?.[0] || '';
            return (
              <div key={index} className="relative md:grid md:grid-cols-2 gap-8 items-start">
                {/* Left column: experience card */}
                <div className="bg-secondary/40 border border-border p-6 rounded-lg shadow-sm animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-2 w-2 rounded-full bg-gradient-purple inline-block" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-xl text-blue-400 font-bold">{exp.role} - {exp.company}</h3>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                    {exp.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Right column: starting year with subtitle */}
                <div className="hidden md:flex flex-col items-start justify-center pl-6">
                  <span className="text-5xl font-bold text-muted-foreground/10 select-none">
                    {startYear}
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">{exp.company}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
