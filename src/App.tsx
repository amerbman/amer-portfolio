import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

const App = () => {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Stars */}
      <StarsBackground />
      
      {/* Main Layout (Sidebar + Content) */}
      <div className="absolute top-0 left-0 w-full h-full flex">
        {/* Sidebar (Fixed, No Separator) */}
        <aside className="w-[40%] h-full flex flex-col justify-between p-6 bg-transparent z-10">

          <Sidebar />
          
        </aside>

        {/* Main Content */}
        <main className="w-[60%] h-full overflow-y-scroll p-6 z-10">
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
