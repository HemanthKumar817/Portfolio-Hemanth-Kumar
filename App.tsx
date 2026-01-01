
import React, { useState, useEffect } from 'react';
import LiquidEther from './components/LiquidEther';
import FlowingMenu from './components/FlowingMenu';
import ProfileCard from './components/ProfileCard';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import HueWheelColorPicker from './components/HueWheelColorPicker';
import { Palette, X, Menu } from 'lucide-react';

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
  { link: '#', text: 'Creative Coding', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' }, // Cyberpunk/Code abstract
  { link: '#', text: 'UX Strategy', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600' }, // Wireframing/Design
  { link: '#', text: '3D Interactions', image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=600' }, // 3D Shapes/Abstract
  { link: '#', text: 'AI Design', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' }  // AI Brain/Nodes
];

const PROJECT_ITEMS = [
  { id: 1, title: 'AI Code Review Bot', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/AI-Code-Review-Bot' },
  { id: 2, title: 'AI PDF Chatbot', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/ai-pdf-chatbot-langchain' },
  { id: 3, title: 'Custom AI Agent', category: 'Python', year: '2025', link: 'https://github.com/HemanthKumar817/Custom-AI-Agent-with-Memory' },
  { id: 4, title: 'Food Delivery', category: 'JavaScript', year: '2025', link: 'https://github.com/HemanthKumar817/Food-Delivery' },
  { id: 5, title: 'Placement Prime', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/Placement-Prime' },
  { id: 6, title: 'Portfolio', category: 'TypeScript', year: '2025', link: 'https://github.com/HemanthKumar817/Portfolio-Hemanth-Kumar' }
];

export default function App() {
  const [activePalette, setActivePalette] = useState(0);
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [customHue, setCustomHue] = useState<number | null>(null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Static palettes (kept as fallback or presets)
  const defaultPalettes = [
    ['#5227FF', '#FF9FFC', '#B19EEF'],
    ['#00C9FF', '#92FE9D', '#00f2fe'],
    ['#f83600', '#f9d423', '#ee0979'],
  ];

  // Helper to generate palette from hue
  const getPaletteFromHue = (hue: number) => {
    return [
      `hsl(${hue}, 100%, 50%)`,
      `hsl(${hue + 40}, 100%, 60%)`,
      `hsl(${hue - 40}, 100%, 60%)`
    ];
  };

  const currentColors = customHue !== null
    ? getPaletteFromHue(customHue)
    : defaultPalettes[activePalette % defaultPalettes.length]; // Fallback safe index

  const currentPreset = PRESETS[activePresetIdx];

  const handleNext = () => {
    setActivePresetIdx((prev) => (prev + 1) % PRESETS.length);
  };

  const handlePrev = () => {
    setActivePresetIdx((prev) => (prev - 1 + PRESETS.length) % PRESETS.length);
  };

  return (
    <div
      className="relative w-full bg-black text-white selection:bg-[var(--theme-color)] selection:text-white"
      style={{ "--theme-color": currentColors[0] } as React.CSSProperties}
    >
      {/* Background Simulation - Persistent across scroll */}
      <TargetCursor
        targetSelector="a, button, input, textarea, .cursor-pointer, [role='button']"
        spinDuration={4}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={currentColors}
          mouseForce={currentPreset.mouseForce}
          cursorSize={currentPreset.cursorSize}
          isViscous={currentPreset.isViscous}
          viscous={currentPreset.viscous}
          iterationsViscous={20}
          iterationsPoisson={20}
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
          <button
            onClick={() => setColorPickerOpen(true)}
            className="flex items-center gap-2 text-[10px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.2em]"
          >
            <Palette size={12} />
            <span>Theme</span>
          </button>
          <a href="#about" className="text-[10px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.4em]">About</a>
          <a href="#skills" className="text-[10px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.4em]">Skills</a>
          <a href="#projects" className="text-[10px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.4em]">Projects</a>
          <a href="#contact" className="text-[10px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.4em]">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center animate-[fadeIn_0.3s_ease-out]">
          <button
            className="absolute top-8 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-12">
            <button
              onClick={() => {
                setColorPickerOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-4 text-xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors"
            >
              <Palette size={24} />
              <span>Theme</span>
            </button>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="text-xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors">About</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="text-xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors">Skills</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="text-xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-xl font-black uppercase tracking-widest text-white hover:text-purple-400 transition-colors">Contact</a>
          </nav>
        </div>
      )}

      {colorPickerOpen && (
        <HueWheelColorPicker
          onColorChange={setCustomHue}
          onClose={() => setColorPickerOpen(false)}
          initialHue={customHue || 0}
        />
      )}

      {/* Hero / About Section */}
      <section id="home" className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6 pt-20 pointer-events-none">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center mt-[-5vh]">
          <h1 className="text-[12vw] md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 select-none opacity-90 drop-shadow-2xl">
            HEMANTH<br />KUMAR
          </h1>

          <div className="mb-16 w-full max-w-md pointer-events-auto">
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
              Choose Color
            </p>
            <div className="flex flex-col items-center gap-6 pointer-events-auto">
              <button
                onClick={() => setColorPickerOpen(true)}
                className="group relative flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                <div
                  className="w-8 h-8 rounded-full border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors duration-500"
                  style={{ backgroundColor: currentColors[0] }}
                />
                <span className="text-sm font-black uppercase tracking-widest">Customize Theme</span>
                <Palette size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 w-full min-h-screen pt-24">
        <div className="px-6 mb-12 max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-center">Skills</h2>
        </div>

        <div className="h-[70vh] border-y border-white/5 backdrop-blur-sm">
          <FlowingMenu
            items={SKILL_ITEMS}
            speed={12}
            marqueeBgColor="rgba(255,255,255,0.95)"
            marqueeTextColor="#000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20" id="about">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-8">About</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              Hemanth Kumar focuses on the intersection of Artificial Intelligence and human-centric design.
              I specialize in building intelligent agents and adaptive systems that enhance human capabilities,
              creating software that is not just functional, but truly smart.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ProfileCard
              name="HEMANTH KUMAR"
              title="AI Developer"
              handle="hemanth.ui"
              status="Active"
              avatarUrl="/hemanth.jpg"
              contactText="Connect"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowColor="#a855f7"
              onContactClick={() => window.location.href = '#contact'}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 w-full min-h-screen py-32 border-t border-white/5 backdrop-blur-sm bg-black/20">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Projects</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest leading-loose">
              A comprehensive record of experimental prototypes and production-ready systems developed by Hemanth Kumar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_ITEMS.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-xl hover:bg-white/[0.08] transition-all cursor-pointer block"
              >
                <span className="text-[8px] font-mono opacity-30 mb-8 block">0{project.id} / {project.year}</span>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[var(--theme-color)] transition-colors">{project.title}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{project.category}</p>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 py-20 pointer-events-auto mt-20">
        <Contact />
      </section>

      <footer className="relative z-10 w-full px-6 py-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-black tracking-tighter">H<span className="text-purple-400">K</span></div>
          <div className="flex gap-12">
            <a href="https://www.linkedin.com/in/tangudu-hemanth-kumar-25855229a/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/HemanthKumar817" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Github</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.5em] font-medium opacity-30 text-center">
            &copy; 2025 HEMANTH KUMAR &mdash; AI DEVELOPER
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
