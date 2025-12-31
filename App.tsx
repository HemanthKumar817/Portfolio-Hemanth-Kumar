
import React, { useState, useEffect } from 'react';
import LiquidEther from './components/LiquidEther';
import FlowingMenu from './components/FlowingMenu';

interface Preset {
  name: string;
  mouseForce: number;
  viscous: number;
  resolution: number;
  cursorSize: number;
  autoSpeed: number;
  isViscous: boolean;
  autoIntensity: number;
  description: string;
}

const PRESETS: Preset[] = [
  { 
    name: 'Balanced', 
    description: 'A harmonious blend of reactive force and smooth viscosity.',
    mouseForce: 25, 
    viscous: 40, 
    resolution: 0.4, 
    cursorSize: 110, 
    autoSpeed: 0.8, 
    isViscous: true,
    autoIntensity: 3.0 
  },
  { 
    name: 'Nebula', 
    description: 'Slow, cosmic drifts with high inertia and large impact zones.',
    mouseForce: 15, 
    viscous: 100, 
    resolution: 0.5, 
    cursorSize: 180, 
    autoSpeed: 0.4, 
    isViscous: true,
    autoIntensity: 2.0 
  },
  { 
    name: 'Velocity', 
    description: 'High-speed, low-friction response for rapid interactions.',
    mouseForce: 65, 
    viscous: 10, 
    resolution: 0.6, 
    cursorSize: 80, 
    autoSpeed: 1.8, 
    isViscous: true,
    autoIntensity: 5.0 
  },
  { 
    name: 'Heavy Oil', 
    description: 'Dense, sluggish physics that linger long after movement.',
    mouseForce: 10, 
    viscous: 250, 
    resolution: 0.35, 
    cursorSize: 250, 
    autoSpeed: 0.2, 
    isViscous: true,
    autoIntensity: 1.5 
  },
  { 
    name: 'Quantum', 
    description: 'Ghostly, non-viscous particles that ripple instantly.',
    mouseForce: 45, 
    viscous: 5, 
    resolution: 0.7, 
    cursorSize: 60, 
    autoSpeed: 2.5, 
    isViscous: false,
    autoIntensity: 4.0 
  },
];

const SKILL_ITEMS = [
  { link: '#', text: 'Creative Coding', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600' },
  { link: '#', text: 'UX Strategy', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600' },
  { link: '#', text: '3D Interactions', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600' },
  { link: '#', text: 'AI Design', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600' }
];

const PROJECT_ITEMS = [
  { id: 1, title: 'Lumina Engine', category: 'Physics Simulation', year: '2024' },
  { id: 2, title: 'Vortex UI', category: 'Interface Design', year: '2023' },
  { id: 3, title: 'Echo Chamber', category: 'Audio Visualizer', year: '2024' },
  { id: 4, title: 'Prism System', category: 'Generative Art', year: '2023' }
];

export default function App() {
  const [activePalette, setActivePalette] = useState(0);
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const palettes = [
    ['#5227FF', '#FF9FFC', '#B19EEF'],
    ['#00C9FF', '#92FE9D', '#00f2fe'],
    ['#f83600', '#f9d423', '#ee0979'],
    ['#7028e4', '#e5b2ca', '#ffffff'],
    ['#000000', '#333333', '#ffffff']
  ];

  const currentPreset = PRESETS[activePresetIdx];

  const handleNext = () => {
    setActivePresetIdx((prev) => (prev + 1) % PRESETS.length);
  };

  const handlePrev = () => {
    setActivePresetIdx((prev) => (prev - 1 + PRESETS.length) % PRESETS.length);
  };

  return (
    <div className="relative w-full bg-black text-white selection:bg-purple-500 selection:text-white">
      {/* Background Simulation - Persistent across scroll */}
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={palettes[activePalette]}
          mouseForce={currentPreset.mouseForce}
          cursorSize={currentPreset.cursorSize}
          isViscous={currentPreset.isViscous}
          viscous={currentPreset.viscous}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={currentPreset.resolution}
          isBounce={false}
          autoDemo={true}
          autoSpeed={currentPreset.autoSpeed}
          autoIntensity={currentPreset.autoIntensity}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={1.0}
        />
      </div>

      {/* Floating Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-8 flex justify-between items-center ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
        <div className="text-3xl font-black tracking-tighter pointer-events-auto cursor-default select-none transition-transform hover:scale-105">
          <span className="text-white">H</span><span className="text-purple-500">K</span>
        </div>
        <nav className="hidden md:flex gap-12 pointer-events-auto">
          <a href="#about" className="text-[10px] font-bold hover:text-purple-400 transition-colors uppercase tracking-[0.4em]">About</a>
          <a href="#skills" className="text-[10px] font-bold hover:text-purple-400 transition-colors uppercase tracking-[0.4em]">Skills</a>
          <a href="#projects" className="text-[10px] font-bold hover:text-purple-400 transition-colors uppercase tracking-[0.4em]">Projects</a>
        </nav>
      </header>

      {/* Hero / About Section */}
      <section id="about" className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6 pt-20 pointer-events-none">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center mt-[-5vh]">
          <h1 className="text-[12vw] md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 select-none opacity-90 drop-shadow-2xl">
            HEMANTH<br/>KUMAR
          </h1>
          
          <div className="mb-16 w-full max-w-md pointer-events-auto">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] mb-6 select-none">
              Identity Simulation
            </p>
            <div className="flex items-center justify-between gap-8 group">
              <button 
                onClick={handlePrev}
                className="p-2 text-white/40 hover:text-white transition-colors transform active:scale-90"
                aria-label="Previous Profile"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div className="flex flex-col items-center min-w-[220px]">
                <div key={currentPreset.name} className="animate-[fadeIn_0.5s_ease-out]">
                  <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-1">
                    {currentPreset.name}
                  </h2>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.1em] max-w-[240px] leading-relaxed">
                    {currentPreset.description}
                  </p>
                </div>
                <div className="flex gap-1 mt-6">
                  {PRESETS.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-[1px] w-6 transition-all duration-500 ${idx === activePresetIdx ? 'bg-white w-10 shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>

              <button 
                onClick={handleNext}
                className="p-2 text-white/40 hover:text-white transition-colors transform active:scale-90"
                aria-label="Next Profile"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] mb-6 select-none">
              Chromatics
            </p>
            <div className="flex flex-wrap justify-center gap-8 pointer-events-auto">
              {palettes.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePalette(idx)}
                  className={`w-12 h-12 rounded-full border-2 transition-all transform hover:scale-125 ${
                    activePalette === idx ? 'border-white scale-125 shadow-[0_0_25px_rgba(255,255,255,0.4)]' : 'border-transparent opacity-60'
                  }`}
                  style={{ background: `linear-gradient(45deg, ${p[0]}, ${p[1]})` }}
                  aria-label={`Change to palette ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 w-full min-h-screen pt-24">
        <div className="px-6 mb-12 max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[1em] text-purple-400 mb-4">Competencies</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-center">Skill Curation</h2>
        </div>
        
        <div className="h-[70vh] border-y border-white/5 backdrop-blur-sm">
          <FlowingMenu 
            items={SKILL_ITEMS} 
            speed={12} 
            marqueeBgColor="rgba(255,255,255,0.95)"
            marqueeTextColor="#000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-6 italic">Background</p>
                <h3 className="text-3xl font-black tracking-tighter uppercase mb-8">Technical Proficiency</h3>
                <p className="text-gray-400 leading-relaxed text-lg font-medium">
                    Hemanth Kumar focuses on the intersection of human psychology and computational graphics. 
                    The methodology revolves around minimizing friction in user experiences while maximizing 
                    the sensory impact of digital environments. I am dedicated to building systems 
                    that feel natural, fluid, and responsive to human intent.
                </p>
            </div>
            <div className="relative aspect-square bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md flex items-center justify-center p-12">
                 <div className="text-center">
                    <div className="text-5xl font-black mb-4">60<span className="text-purple-500">FPS</span></div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">GPU Accelerated Mastery</p>
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute top-4 left-4 text-[8px] font-mono opacity-20">HK_CORE_v3.1</div>
                 <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-20">OPTIMIZED_FLOW</div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 w-full min-h-screen py-32 border-t border-white/5 backdrop-blur-sm bg-black/20">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[1em] text-purple-400 mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Projects</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest leading-loose">
              A comprehensive record of experimental prototypes and production-ready systems developed by Hemanth Kumar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_ITEMS.map((project) => (
              <div key={project.id} className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-xl hover:bg-white/[0.08] transition-all cursor-pointer">
                <span className="text-[8px] font-mono opacity-30 mb-8 block">0{project.id} / {project.year}</span>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{project.category}</p>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 w-full px-6 py-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-black tracking-tighter">H<span className="text-purple-400">K</span></div>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Github</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.5em] font-medium opacity-30 text-center">
            &copy; 2025 HEMANTH KUMAR &mdash; SYSTEM ARCHITECTURE
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Overlays */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-5" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[6]" />
    </div>
  );
}
