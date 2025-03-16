const Experience = () => {
  return (
    <section id="experience" className="text-white p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Experience</h2>
      <div className="space-y-8">
        {/* Experience Item 1 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400">
          <div className="text-gray-400 text-sm">September 2024 – Present</div>
          <h3 className="text-xl font-semibold text-white">Freelance Web Developer · Self-Employed</h3>
          <p className="text-gray-300 mt-2">
          Redesigned the SSBTE website with modern front-end technologies, improving UI/UX, performance, and SEO.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
              JavaScript
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
              TypeScript
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
              React
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
              TailwindCSS
            </span>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400">
          <div className="text-gray-400 text-sm">December 2024 – Present</div>
          <h3 className="text-xl font-semibold text-white">Marketing Manager · Saleh Saeed Baosman Trading Est. </h3>
          <p className="text-gray-300 mt-2">
          Developed and executed marketing strategies to boost brand presence, sales, and digital engagement.
          </p>
        </div>

         {/* Experience Item 3 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400">
          <div className="text-gray-400 text-sm">April 2024 – June 2024 </div>
          <h3 className="text-xl font-semibold text-white">Technical Support Specialist  · Tasheel Information Technology </h3>
          <p className="text-gray-300 mt-2">
          Deployed websites via Microsoft IIS, optimized MySQL databases, and provided IT support for high-profile clients, including the Public Prosecution.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            Microsoft IIS
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            MySQL
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
              Json
            </span>
          </div>
        </div>

        {/* Experience Item 4 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400">
          <div className="text-gray-400 text-sm">September 2022 – January 2023 </div>
          <h3 className="text-xl font-semibold text-white">Systems Analyst · SITACO</h3>
          <p className="text-gray-300 mt-2">
          Redesigned the company website with React, implemented trading software automation, and optimized database management for efficiency.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            Bootstrap
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            React
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            HTML
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            JavaScript
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            CSS
            </span>
          </div>
        </div>

        {/* Experience Item 5 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400">
          <div className="text-gray-400 text-sm">August 2021 – August 2022  </div>
          <h3 className="text-xl font-semibold text-white">Technical Support  · Afaqy Tech for Tracking and Security Solutions </h3>
          <p className="text-gray-300 mt-2">
          Resolved technical issues, advised on product selection, and led GPS system installations for mobile towers during Riyadh Season.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            GPS
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">
            Raspberry Pi
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
