// ✅ src/components/Experience.tsx (with schema and preserved comments)

const Experience = () => {
  return (
    <section id="experience" className="text-white px-6 md:p-10 max-w-3xl mx-auto" itemScope itemType="http://schema.org/ItemList">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center md:text-left" itemProp="name">
        Experience
      </h2>

      <div className="space-y-8">
        {/* Experience Item 1 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">September 2024 – Present</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">
                Freelance Application Engineer & Web Developer <br /> FL-856606454 · Trusted Raed Freelancer
              </h3>

          <p className="text-gray-300 mt-2" itemProp="description">
            Redesigned the SSBTE website with modern front-end technologies, improving UI/UX, performance, and SEO.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">JavaScript</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">TypeScript</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">React</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">TailwindCSS</span>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">December 2024 – Present</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Marketing Manager · Saleh Saeed Baosman Trading Est.</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Developed and executed marketing strategies to boost brand presence, sales, and digital engagement.
          </p>
        </div>

        {/* Experience Item 3 */}
        {/* <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">April 2024 – June 2024</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Technical Support Specialist · Tasheel Information Technology</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Deployed websites via Microsoft IIS, optimized MySQL databases, and provided IT support for high-profile clients, including the Public Prosecution.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">Microsoft IIS</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">MySQL</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">Json</span>
          </div>
        </div> */}

        {/* Experience Item 4 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">September 2022 – February 2023</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Information Systems Co-op Intern · SITACO</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Redesigned the company website with React, implemented trading software automation, and optimized database management for efficiency.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">Bootstrap</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">React</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">HTML</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">JavaScript</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">CSS</span>
          </div>
        </div>

        {/* Experience Item 5 */}
        <div className="p-6 rounded-lg shadow-lg bg-transparent border border-gray-700 transition-all duration-300 hover:shadow-blue-500/50 hover:border-blue-400" itemScope itemType="http://schema.org/JobPosting">
          <div className="text-gray-400 text-sm" itemProp="datePosted">August 2021 – August 2022</div>
          <h3 className="text-xl font-semibold text-white" itemProp="title">Pre-Sales Engineer · Afaqy Tech for Tracking and Security Solutions</h3>
          <p className="text-gray-300 mt-2" itemProp="description">
            Resolved technical issues, advised on product selection, and led GPS system installations for mobile towers during Riyadh Season.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">GPS</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400">Raspberry Pi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

