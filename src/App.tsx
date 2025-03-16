import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

const App = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Background Stars */}
      <StarsBackground />
      
      {/* Main Layout (Sidebar + Content) */}
      <div className="absolute top-0 left-0 w-screen min-h-screen flex flex-col md:flex-row">





        {/* Sidebar (Fixed, No Separator) */}
        <aside className="w-full md:w-[45%] h-auto md:h-screen md:fixed md:left-0 md:top-0 flex flex-col items-center md:items-start justify-start z-20">



          <Sidebar />
          
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-[60%] h-auto md:h-screen overflow-y-auto p-6 relative md:ml-auto">




          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
