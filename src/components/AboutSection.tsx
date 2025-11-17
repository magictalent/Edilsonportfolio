import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="container px-4 py-16">
      <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <p className="text-gray-300 leading-relaxed">
          I'm a Senior Full-Stack Developer, Mobile Engineer, and AI Software Engineer based in Brazil with over 10 years of experience designing and building scalable, high-performance web and mobile applications. Skilled in React, Vue, Node.js, Laravel, Python, React Native, Flutter, and cloud technologies (AWS, Azure, Docker, Kubernetes). I deliver fast, reliable, and user-focused solutions for startups, agencies, and international clients with strong expertise in system architecture, automation, and AI-powered features.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Building production-grade apps for enterprises and startups</li>
          <li>• Expertise in frontend, backend, mobile, and AI/ML development</li>
          <li>• Strong focus on system architecture and performance optimization</li>
          <li>• Proven track record leading Agile development teams</li>
          <li>• Available for full-time or part-time freelance/remote work</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;

