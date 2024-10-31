import React, { useEffect,useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, ChevronDown, Menu, X } from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState("");

  // Typewriter effect
  useEffect(() => {
    const name = "Pranav Dhobi";
    let index = 0;

    const interval = setInterval(() => {
      if (index < name.length) {
        setShowName(name.slice(0, index + 1)); // Update showName with a slice of the name
        index++;
      } else {
        clearInterval(interval); // Stop interval after full name is displayed
      }
    }, 100); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-3xl"></div>
        </div>

        <nav className="fixed top-0 left-0 right-0 p-4 sm:p-6 bg-gray-900/80 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-xl font-bold">Pranav.dev</span>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
              <div className="flex flex-col p-4 gap-4">
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors py-2 px-4 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors py-2 px-4 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#achievements"
                  className="hover:text-blue-400 transition-colors py-2 px-4 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Achievements
                </a>
              </div>
            </div>
          )}
        </nav>

        <div className="max-w-7xl mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-blue-400 ring-offset-4 ring-offset-gray-900 mt-16 sm:mt-20">
              <img
                src="Pranav.png"
                alt="Pranav Dhobi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {showName}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 text-gray-300">
            Computer Science Student & Aspiring Software Engineer
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">
            Final year undergraduate at Sardar Vallabhbhai National Institute of Technology, Surat and passionate about building innovative solutions
            and exploring new technologies.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-12">
            <a href="https://github.com/Prince2429" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/pranav-dhobi-9b7870239/" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:pranavdhobi21@gmail.com"
               className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Rest of the sections remain unchanged */}
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 scroll-mt-20">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
      {[
        {
          title: "Realtime Weather Monitoring",
          description: "A comprehensive Live Weather Application delivering real-time data, trend visualizations, and customizable alerts for enhanced user insights and decision-making.",
          tech: ["React", "Flask", "MySQL", "OpenWeatherMap API", "Recharts", "Node.js", "Python"],
          image: "Screenshot 2024-10-27 013306.png"
        },
        {
          title: "Rule Engine with AST",
          description: "Designed a dynamic rule engine with Abstract Syntax Trees (AST) for intuitive rule evaluation, creation, and visualization, ensuring robust error handling and validation.",
          tech: ["React", "TypeScript", "Tailwind CSS", "Flask", "MySQL"],
          image: "Screenshot 2024-10-27 013002.png"
        },
      ].map((project, index) => (
        <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 h-[28rem] flex flex-col justify-between"> {/* Fixed height */}
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col justify-between h-full"> {/* Ensures uniform spacing */}
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 scroll-mt-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-gray-900 rounded-xl">
        <Code2 className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
        <div className="space-y-2">
          {[
            { skill: "C", rating: 75 },
            { skill: "C++", rating: 90 },
            { skill: "Python", rating: 85 },
            { skill: "JavaScript", rating: 70 },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400" style={{ width: `${item.rating}%` }}></div>
              </div>
              <span className="ml-4 min-w-20">{item.skill}</span>
            </div>
          ))}
        </div>
      </div>
            
            <div className="p-6 bg-gray-900 rounded-xl">
              <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
  "HTML",
  "CSS",
  "Flask",
  "MySQL",
  "React",
  "Node.js",
  "Git",
  "Deep Learning",
  "Machine Learning",
  "Natural Language Processing",
  "REST APIs",
  "Operating System",
  "Canva",
  "Power BI"
].map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-sm text-center">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Academic Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <h4 className="font-semibold">CGPA</h4>
                    <p className="text-gray-400">Maintained 8.27/10 CGPA throughout the undergraduate program.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Technical Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-4">🏆</span>
                  <div>
                    <h4 className="font-semibold">Hackathon</h4>
                    <ul>
                      <li>
                    <p className="text-gray-400">Secured 1st place in GWOC conducted by GDSC for innovative solution.</p>
                    </li>
                    <li>
                    <p className="text-gray-400">Ranked under 50 in Amazon ML Challenge.</p>
                    </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">🌟</span>
                  <div>
                    <h4 className="font-semibold">Coding</h4>
                    <p className="text-gray-400">Ranked under 20 at Gfg platform at institutional level.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <div className="max-w-7xl mx-auto">
          <p>© 2024 Pranav Dhobi. All rights reserved.</p>
          <p className="mt-2">Made with passion and code 💻</p>
        </div>
      </footer>
    </div>
  );
}

export default App;