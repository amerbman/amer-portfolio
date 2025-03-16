import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close menu when clicking a link
          }
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="text-white bg-transparent p-4 md:p-6 rounded-lg h-full flex flex-col items-center justify-center font-mono tracking-widest w-full md:w-[90%]">
      {/* Hamburger Menu for Mobile */}
      <div className="absolute top-5 left-5 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      <h1 className="text-5xl font-bold text-center uppercase text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)] animate-[pulse_2s_ease-in-out_infinite] mt-10 leading-[1.2] w-full break-words">
        Amer <br /> Baosman
      </h1>
      <p className="text-blue-400 mt-6 text-center text-lg max-w-sm leading-relaxed">
        Front End Developer <br />
        passionate about crafting <br />
        accessible, pixel-perfect digital experiences <br />
        for the web.
      </p>

      {/* Mobile Dropdown Menu */}
      <nav
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-80 p-4 transition-all duration-300 md:relative md:bg-transparent md:top-auto md:left-auto md:w-auto ${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-6 md:mt-auto`}
      >
        <a href="#experience" className="block text-gray-400 hover:text-blue-400 uppercase p-2 md:p-0">
          Experience
        </a>
        <a href="#projects" className="block text-gray-400 hover:text-blue-400 uppercase p-2 md:p-0">
          Projects
        </a>
        <a href="#contact" className="block text-gray-400 hover:text-blue-400 uppercase p-2 md:p-0">
          Contact
        </a>
      </nav>

      <div className="mt-10 flex space-x-4">
        <a href="https://github.com/amerbman" className="text-gray-400 hover:text-blue-400 uppercase">GitHub</a>
        <a href="www.linkedin.com/in/amer-baosman" className="text-gray-400 hover:text-blue-400 uppercase">LinkedIn</a>
      </div>
    </div>
  );
};

export default Sidebar;
