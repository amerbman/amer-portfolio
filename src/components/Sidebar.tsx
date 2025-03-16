const Sidebar = () => {
  return (
    <div className="text-white bg-transparent p-6 rounded-lg h-full flex flex-col items-center justify-between font-mono tracking-widest p-6 pt-20">
      <h1 className="text-5xl font-bold text-center uppercase text-blue-300 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)] animate-[pulse_2s_ease-in-out_infinite] mt-10">Amer Baosman</h1>
      <p className="text-blue-400 mt-6 text-left text-lg max-w-xs ">Front End Developer passionate about crafting accessible, pixel-perfect digital experiences for the web.</p>
      <nav className="mt-auto space-y-4 text-center">
        <a href="#experience" className="block text-gray-400 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-400 pl-4 uppercase">Experience</a>
        <a href="#projects" className="block text-gray-400 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-400 pl-4 uppercase">Projects</a>
      </nav>
      <div className="mt-10 flex space-x-4">
        {/* Social Media Icons */}
        <a href="#" className="text-gray-400 hover:text-blue-400 uppercase">GitHub</a>
        <a href="#" className="text-gray-400 hover:text-blue-400 uppercase">LinkedIn</a>
      </div>
    </div>
  );
};

export default Sidebar;


