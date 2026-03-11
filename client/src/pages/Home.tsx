import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Mail, Download, ExternalLink, Award, Zap, FileText, GraduationCap, BookOpen } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  images?: string[];
  tags: string[];
  category: "Robotics" | "Industrial" | "Research";
}

const projects: Project[] = [
  {
    id: "mindspark",
    title: "Mindspark - Pick and Place Robot",
    description:
      "Engineered and fabricated an autonomous pick-and-place robot from scratch with mechanical CAD assemblies, PCB design, and embedded control systems for precision industrial automation",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/mindspark_1_12dcfe4c.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/mindspark_2_0a03ac33.jpeg"
    ],
    tags: ["CAD Design", "PCB Design", "Fabrication", "Control Systems"],
    category: "Robotics",
  },
  {
    id: "eyantra2025",
    title: "E-Yantra 2025",
    description:
      "Developed mechanical CAD assemblies for an autonomous pick-and-place robot with involvement in mechanical design, PCB fabrication, embedded systems coding, and comprehensive system integration testing",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/e yantra 2025_1_cf447039.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/e yantra 2025_2_f759ca68.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/e yantra 2025_3_3dd8c5ef.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/e yantra 2025_4_53f355b9.jpeg"
    ],
    tags: ["CAD Design", "PCB Fabrication", "Embedded Systems", "System Integration"],
    category: "Robotics",
  },
  {
    id: "ddrobocon2025",
    title: "DD Robocon 2025",
    description:
      "Led mechanical design and fabrication of competition robots with advanced chassis design and subsystem integration for autonomous navigation and task execution",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 25_1_a80fdf78.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 25_2_c9a58c89.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 25_3_2461dc1e.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 25_4_7e7c02ce.jpg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 2025_5_02513ab4.jpeg"
    ],
    tags: ["CAD Modeling", "Robot Chassis Design", "Assembly"],
    category: "Robotics",
  },
  {
    id: "ddrobocon2024",
    title: "DD Robocon 2024",
    description:
      "Contributed to mechanical design and fabrication of manual and autonomous robots with CAD modeling, assembly support, and subsystem integration",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 2024_1_4b6641c5.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 2024_2_95ce0f6e.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/robocon 2024_3_01fcfe4f.png"
    ],
    tags: ["CAD Modeling", "Assembly", "Subsystem Integration"],
    category: "Robotics",
  },
  {
    id: "ifm",
    title: "IFM Industrial Automation",
    description:
      "Developed and integrated the mechanical architecture of an autonomous mobile robot with obstacle detection system and pallet detection for seamless industrial automation",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ifm_1_7b1590e5.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ifm_2_76887ab6.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ifm_3_e3b09d30.png",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ifm_4_6560ef71.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ifm_5_801016f3.jpeg"
    ],
    tags: ["Mechanical Architecture", "System Integration", "Sensor Integration"],
    category: "Industrial",
  },
  {
    id: "eyantra2024",
    title: "E-Yantra 2024",
    description:
      "Engineered a self-balancing robot with motion control and mechanical development, supporting CAD design, fabrication, and PID-based motion control for precise navigation",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/e yantra 2024_8a71e175.png"
    ],
    tags: ["CAD Design", "Motion Control", "PID Control"],
    category: "Robotics",
  },
  {
    id: "evsaksharn",
    title: "EV Saksharn",
    description:
      "Contributed to the development of a fully functional electric sports car with involvement in mechanical systems design and integration",
    fullDescription:
      "This project showcases advanced robotics and mechanical engineering principles with hands-on implementation of CAD design, fabrication, and control systems. The robot demonstrates precision automation capabilities with advanced motion planning and real-time control.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ev saksham_1_ecd6a936.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ev saksham_2_20f0b7b6.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/ev saksham_3_4f2735e1.jpeg"
    ],
    tags: ["Mechanical Design", "System Integration", "EV Systems"],
    category: "Industrial",
  },
];

const researchPapers = [
  {
    id: "thermoplastics-paper",
    title: "Evaluating the Strength of Popular 3D Printing Thermoplastics: PLA and ABS",
    description: "Comparative analysis of mechanical properties of 3D printing materials",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/research paper_5feb07e9.pdf"
  },
  {
    id: "matlab-paper",
    title: "MATLAB Simulink Competition Project",
    description: "Robot simulation and motion studies",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/Matlab_aad32245.pdf"
  }
];

const achievements = [
  "Top 15 Rank — DD Robocon National Competition 2025",
  "2× National Finalist — DD Robocon 2024 & 2025",
  "Top 10 Rank — e-Yantra Robotics Competition 2025, IIT Bombay",
  "Reached Stage 2 (Top 50 teams) — e-Yantra Robotics Competition",
  "Top 10 Rank — MATLAB & Simulink Robotics Competition",
  "Completed DAAD Indo-German Embedded Systems & Industry 4.0 Training, FH Aachen University, Germany",
  "Completed DAAD Short Course on AI for Engineering & Innovation"
];

const badges = ["Innovator", "Creative", "Problem Solver", "Engineer", "Visionary", "Roboticist", "Mechanical Genius", "Tech Enthusiast"];

const roles = ["Mechanical Engineer", "Robotics Innovator", "Problem Solver", "Tech Enthusiast"];

const education = [
  {
    title: "Class XII (Senior Secondary)",
    school: "Little Flower International School",
    board: "Central Board of Secondary Education (CBSE)",
    percentage: "92.8%",
    date: "May 2022",
    location: "Datia, India",
    icon: "📚"
  },
  {
    title: "Class X (Secondary)",
    school: "V.D Convent Hr. Secondary School",
    board: "Central Board of Secondary Education (CBSE)",
    percentage: "96.5%",
    date: "March 2020",
    location: "Gwalior, India",
    icon: "📖"
  }
];

// Floating particles background
const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      />
    ))}
  </div>
);

// Typewriter Component
const TypeWriter = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span>
      {displayedText}
      {index < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

// Floating Badge Component
const FloatingBadge = ({ text, delay, position }: { text: string; delay: number; position: string }) => (
  <div
    className={`absolute ${position} px-4 py-2 bg-cyan-500/30 border border-cyan-400/70 rounded-full text-cyan-300 text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}
    style={{ animation: `float 8s ease-in-out ${delay}s infinite` }}
  >
    ✨ {text}
  </div>
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [currentRole, setCurrentRole] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Cycle through roles
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
    if (expandedProject !== projectId) {
      setTimeout(() => {
        const projectCard = document.getElementById(`project-${projectId}`);
        if (projectCard) {
          projectCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        @keyframes slideInText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes textShimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes wordPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes cornerGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(0, 217, 255, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 217, 255, 0.6); }
        }
        .glow-border {
          animation: glow 3s ease-in-out infinite;
        }
        .slide-in-text {
          animation: slideInText 0.8s ease-out forwards;
        }
        .fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .text-animate-1 { animation-delay: 0.1s; }
        .text-animate-2 { animation-delay: 0.3s; }
        .text-animate-3 { animation-delay: 0.5s; }
        .text-shimmer {
          animation: textShimmer 2s ease-in-out infinite;
        }
        .word-pulse {
          animation: wordPulse 2s ease-in-out infinite;
          display: inline-block;
        }
        .gradient-text {
          background: linear-gradient(90deg, #00D9FF, #7C3AED, #00D9FF);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .corner-glow {
          animation: cornerGlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Floating Badges - More Visible */}
      <FloatingBadge text={badges[0]} delay={0} position="top-32 left-1/3" />
      <FloatingBadge text={badges[1]} delay={2} position="top-1/2 right-1/4" />
      <FloatingBadge text={badges[2]} delay={4} position="bottom-1/3 left-1/2" />
      <FloatingBadge text={badges[3]} delay={1} position="top-2/3 right-1/3" />
      <FloatingBadge text={badges[4]} delay={3} position="bottom-1/4 right-1/4" />
      <FloatingBadge text={badges[5]} delay={5} position="top-1/4 left-1/4" />
      <FloatingBadge text={badges[6]} delay={1.5} position="top-1/3 right-1/3" />
      <FloatingBadge text={badges[7]} delay={3.5} position="bottom-1/2 left-1/3" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition cursor-pointer">
                MS
              </button>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Home</a>
                <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">About</a>
                <a href="#education" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Education</a>
                <a href="#skills" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Skills</a>
                <a href="#achievements" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Achievements</a>
                <a href="#projects" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Projects</a>
                <a href="#research" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Research</a>
                <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition cursor-pointer">Contact</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 cursor-pointer"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 cursor-pointer"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative fade-in-scale">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663424061826/mgSDdufb6SYVGo8dGUexDV/my_pic_d49756fa.jpeg"
                  alt="Manas Shrivastava"
                  className="relative w-full max-w-sm rounded-2xl border-2 border-cyan-500/50 shadow-2xl cursor-pointer hover:border-cyan-400 transition"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full slide-in-text text-animate-1">
                <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2 cursor-pointer">
                  <Zap size={16} /> Available for Freelance & Consulting
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white cursor-pointer slide-in-text text-animate-2">
                Hi, I'm <span className="text-cyan-400 word-pulse">Manas</span>
              </h1>

              <p className="text-2xl text-slate-300 mb-6 cursor-pointer slide-in-text text-animate-2">
                I'm a <span className="text-cyan-400 font-semibold">Mechanical Engineer</span>
              </p>

              <p className="text-lg text-slate-400 mb-8 cursor-pointer slide-in-text text-animate-3">
                Passionate about building intelligent machines that solve real-world problems. From award-winning surveillance robots to agricultural automation systems, I bring mechanical precision and software intelligence together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 slide-in-text text-animate-3">
                <Button 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 text-lg px-8 py-6 cursor-pointer"
                >
                  Hire Me
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-6 cursor-pointer"
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  View Projects
                </Button>
              </div>

              <div className="flex justify-start gap-6 text-slate-400 slide-in-text text-animate-3">
                <a 
                  href="https://www.linkedin.com/in/manas-shrivastava03/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition cursor-pointer p-3 border border-slate-600 rounded-full hover:border-cyan-400"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:manas031104@gmail.com"
                  className="hover:text-cyan-400 transition cursor-pointer p-3 border border-slate-600 rounded-full hover:border-cyan-400"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="mt-12 text-center text-slate-400 text-sm slide-in-text text-animate-3">
                <p>Scroll to explore ↓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-8 px-4 py-2 border border-cyan-500/50 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">ABOUT ME</span>
          </div>
          <h2 className="text-5xl font-bold mb-12 cursor-pointer slide-in-text">
            Designing the <span className="gradient-text">Future</span> of Robotics
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="cursor-pointer">
              <p className="text-slate-300 mb-6">
                I'm a Mechanical Engineering student at Vishwakarma Institute of Information Technology (VIIT), Pune, with a passion for robotics and innovation. My journey spans from designing competition-winning robots to developing industrial automation solutions.
              </p>
              <p className="text-slate-300 mb-6">
                With a CGPA of 9.21, I've led the VIIT Robotics Club as Mechanical Head and Vice President, mentoring team members and pushing the boundaries of what's possible in robotics design and fabrication.
              </p>
              <p className="text-slate-300">
                I have completed advanced training programs including DAAD Indo-German Embedded Systems & Industry 4.0 at FH Aachen University, Germany, and specialized courses in AI for Engineering & Innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer fade-in-scale">
                <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                <div className="text-slate-300">Projects Built</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer fade-in-scale">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer fade-in-scale">
                <div className="text-3xl font-bold text-cyan-400 mb-2">9.21</div>
                <div className="text-slate-300">CGPA</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer fade-in-scale">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-slate-300">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cursor-pointer slide-in-text flex items-center justify-center gap-3">
            <GraduationCap className="text-cyan-400" size={32} />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer group fade-in-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-4xl bg-slate-800 p-4 rounded-xl group-hover:scale-110 transition self-start">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition">
                        {item.title}
                      </h3>
                      <span className="text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full border border-slate-600">
                        {item.date} • {item.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-200 mb-1">{item.school}</h4>
                    <p className="text-slate-400 mb-4">{item.board}</p>
                    <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-600/50 group-hover:border-cyan-500/30 transition">
                      <p className="text-cyan-400 font-bold text-lg">
                        Percentage: <span className="text-white">{item.percentage}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-2 border-cyan-400 rounded-full corner-glow"></div>
            <h2 className="text-4xl font-bold mb-12 text-center cursor-pointer slide-in-text">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cursor-pointer">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> CAD & Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Fusion 360", "SolidWorks", "Ansys", "AutoCAD", "Blender"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-cyan-500/20 transition cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">🤖</span> Robotics
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ROS", "RViz", "Gazebo"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-cyan-500/20 transition cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">💻</span> Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "MATLAB"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-cyan-500/20 transition cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔧</span> Manufacturing
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Fabrication", "Assembly", "3D Printing"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-cyan-500/20 transition cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cursor-pointer slide-in-text flex items-center justify-center gap-3">
            <Award className="text-cyan-400" size={32} />
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer group fade-in-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="text-2xl text-cyan-400 group-hover:scale-110 transition">🏆</div>
                  <p className="text-slate-300 group-hover:text-slate-100 transition">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cursor-pointer slide-in-text">Featured Projects</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {["All", "Robotics", "Industrial", "Research"].map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === cat ? "bg-cyan-500 text-slate-900" : "border-slate-600 text-slate-300"}`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600 hover:border-cyan-500 transition cursor-pointer group"
                onClick={() => toggleProject(project.id)}
              >
                {/* Placeholder for Cover Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🤖</div>
                    <p className="text-slate-400 text-sm">Project Gallery</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-600 text-slate-200 px-2 py-1 rounded hover:bg-slate-500 transition cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-slate-600 space-y-4 max-h-[600px] overflow-y-auto">
                      <p className="text-slate-300 text-sm">{project.fullDescription}</p>

                      {/* Image Gallery */}
                      {project.images && project.images.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-cyan-400">Project Images</h4>
                          <div className="relative bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center" style={{ height: "400px" }}>
                            <img
                              src={project.images[currentImageIndex[project.id] || 0]}
                              alt={project.title}
                              className="w-full h-full object-contain p-4"
                            />
                            {project.images.length > 1 && (
                              <div className="absolute inset-0 flex items-center justify-between p-2 bg-black/30 opacity-0 hover:opacity-100 transition">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage(project.id, project.images!.length);
                                  }}
                                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded cursor-pointer"
                                >
                                  ←
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage(project.id, project.images!.length);
                                  }}
                                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded cursor-pointer"
                                >
                                  →
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 cursor-pointer">
                        View Full Details
                      </Button>
                    </div>
                  )}

                  {expandedProject !== project.id && (
                    <Button
                      variant="ghost"
                      className="w-full text-cyan-400 hover:text-cyan-300 cursor-pointer"
                      onClick={() => toggleProject(project.id)}
                    >
                      Learn More <ChevronDown className="ml-2" size={16} />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cursor-pointer slide-in-text flex items-center justify-center gap-3">
            <FileText className="text-cyan-400" size={32} />
            Research Papers & Publications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPapers.map((paper, idx) => (
              <div
                key={paper.id}
                className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-500 transition cursor-pointer group fade-in-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-cyan-400 group-hover:scale-110 transition">📄</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition">{paper.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{paper.description}</p>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-slate-600/50 rounded hover:bg-slate-600 transition cursor-pointer group/pdf"
                    >
                      <Download size={16} className="text-cyan-400 group-hover/pdf:text-cyan-300" />
                      <span className="text-sm text-slate-300 group-hover/pdf:text-slate-100 flex-1">Download PDF</span>
                      <ExternalLink size={14} className="text-slate-500 group-hover/pdf:text-cyan-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center cursor-pointer slide-in-text">Let's Build Together</h2>
          <p className="text-center text-slate-300 mb-8 cursor-pointer">
            Interested in collaborating on robotics projects or discussing opportunities? I'd love to hear from you!
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 cursor-text"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 cursor-text"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 cursor-text"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                rows={6}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 cursor-text"
              />
            </div>
            <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 text-lg py-6 cursor-pointer">
              Send Message
            </Button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a 
              href="mailto:manas031104@gmail.com" 
              className="text-slate-300 hover:text-cyan-400 transition cursor-pointer flex items-center gap-2"
            >
              <Mail size={20} /> Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/manas-shrivastava03/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition cursor-pointer flex items-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700 text-center text-slate-400 cursor-pointer">
        <p>Made with Manus</p>
      </footer>
    </div>
  );
}
