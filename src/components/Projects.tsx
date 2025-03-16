const projects = [
    {
      title: "SSBTE Website",
      description: "Redesigned the SSBTE website with React, Vite, and modern CSS, enhancing UI/UX, performance, and SEO visibility.",
      image: "/assets/ssbte.net.png", 
      tech: ["React", "TypeScript", "TailwindCSS","Vite"],
      link: "https://ssbte.net/", 
    },
    {
      title: "Personal Developer Portfolio",
      description: "A fully responsive, interactive portfolio showcasing my projects, experience, and technical skills. Built with modern frontend technologies, it features a sleek UI, dynamic animations, and a space-themed aesthetic.",
      image: "/assets/my-portfolio.png", 
      tech: ["React", "TypeScript", "TailwindCSS","Three.js","Vite"],
      link: "#", 
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="text-white p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400 flex items-center space-x-6"
            >
              {/* Project Image */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
  
              {/* Project Details */}
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-1">{project.description}</p>
  
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  