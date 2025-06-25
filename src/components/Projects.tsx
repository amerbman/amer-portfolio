const projects = [
  {
    title: "SSBTE Website",
    description: "Redesigned the SSBTE website with React, Vite, and modern CSS, enhancing UI/UX, performance, and SEO visibility.",
    image: "/assets/ssbte.net.png",
    tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
    link: "https://ssbte.net/",
  },
  {
    title: "Flora E-commerce",
    description: "A full-featured e-commerce website built using Next.js 15 App Router, TypeScript, TailwindCSS, and Supabase. It includes product pages, cart, authentication, multi-language support, and HyperPay integration.",
    image: "/assets/flora-preview.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "HyperPay"],
    link: "https://flora-ecommerce-five.vercel.app/en",
  },
  {
    title: "E-commerce Demo",
    description: "A full-featured e-commerce website built using Next.js 15 App Router, TypeScript, TailwindCSS, and Supabase. It includes product pages, cart, authentication, multi-language support, and HyperPay integration.",
    image: "/assets/ecommerceDemo-preview.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "HyperPay"],
    link: "https://demo-ecommerce-five-sepia.vercel.app/en",
  },
  {
    title: "Personal Developer Portfolio",
    description: "A fully responsive, interactive portfolio showcasing my projects, experience, and technical skills. Built with modern frontend technologies, it features a sleek UI, dynamic animations, and a space-themed aesthetic.",
    image: "/assets/my-portfolio.png",
    tech: ["React", "TypeScript", "TailwindCSS", "Three.js", "Vite"],
    link: "https://amer-baosman.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white p-10 max-w-3xl mx-auto"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <h2
        className="text-3xl font-bold text-blue-400 mb-6 text-center md:text-left"
        itemProp="name"
      >
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
            itemProp="url"
          >
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                itemProp="image"
              />
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div>
                <h3
                  className="text-xl font-semibold text-white"
                  itemProp="headline"
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-1" itemProp="description">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
