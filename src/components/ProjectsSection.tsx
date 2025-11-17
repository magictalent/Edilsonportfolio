import React from 'react';

const projects = [
  {
    title: "AI Recipe Search",
    description: "Search engine for recipes with NLP and ranking algorithms.",
    stack: "Python, Elasticsearch, Node.js",
    image: "/projects/recipe.png"
  },
  {
    title: "E-commerce Recommendation System",
    description: "AI-driven system for personalized product suggestions.",
    stack: "Python, TensorFlow, AWS SageMaker",
    image: "/projects/ecommerce.png"
  },
  {
    title: "Microservices Migration",
    description: "Refactored legacy monolith into scalable Kubernetes-based services.",
    stack: "Node.js, Docker, Kubernetes",
    image: "/projects/microservice.png"
  },
  {
    title: "Full-Stack Web Portals",
    description: "Custom portals for fintech clients with authentication and dashboards.",
    stack: "React, Next.js, Node.js",
    image: "/projects/web.png"
  },
  {
    title: "AI agent assistant for e-commerce",
    description: "Conversational AI assistant automating product recommendations and lead qualification.",
    stack: "Python, LangChain, OpenAI API",
    image: "/projects/sellient.png"
  },
  {
    title: "AI-based Mobile App",
    description: "A mini game celebrating Gulf culture, designed for quick play on Android and iOS devices.",
    stack: "Flutter, Node.js,Firebase",
    image: "/projects/dorak.png",
    featured: true
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-900 py-12 px-4">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          // Featured project split layout
          if ((project as any).featured) {
            return (
              <div
                key={index}
                className="bg-secondary/40 border border-border p-6 rounded-lg shadow-md featured-split hover:shadow-lg transition-shadow"
                style={{ minHeight: '22rem' }}
              >
                {/* Text content */}
                <div className="flex-1 flex flex-col justify-center md:pr-6">
                  <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mt-2 text-center md:text-left">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.stack.split(',').map((s) => (
                      <span key={s.trim()} className="px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-xs text-gray-300">{s.trim()}</span>
                    ))}
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-60 h-60 md:h-72 object-cover rounded-md mt-4 md:mt-0 bg-gray-700"
                  loading="lazy"
                />
              </div>
            );
          }

          // Standard layout for all other projects
          return (
            <div key={index} className="bg-secondary/40 border border-border p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 md:h-72 object-cover rounded-md mb-4 bg-gray-700"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-center">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {project.stack.split(',').map((s) => (
                  <span key={s.trim()} className="px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-xs text-gray-300">{s.trim()}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
