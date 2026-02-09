
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeSelector from './components/ThemeSelector';
import FlowingMenu from './components/FlowingMenu';
import ProfileCard from './components/ProfileCard';
import Contact from './components/Contact';
import TargetCursor from './components/TargetCursor';
import { Palette, X, Menu } from 'lucide-react';
import { PRESETS, SKILL_ITEMS, PROJECT_ITEMS, THEMES, Theme } from './constants';




export default function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Initial Load Animation
      const tl = gsap.timeline();

      // Nav
      tl.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Hero Text - Staggered lines
      tl.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      }, "-=0.5");

      // Hero Controls
      tl.from(".hero-controls", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.8");

      // Scroll Triggers

      // Skills Title
      gsap.from(".skills-title", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // About & Card
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Projects Title
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Project Items
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-primary', currentTheme.colors.bgPrimary);
    root.style.setProperty('--bg-secondary', currentTheme.colors.bgSecondary);
    root.style.setProperty('--text-primary', currentTheme.colors.textPrimary);
    root.style.setProperty('--text-secondary', currentTheme.colors.textSecondary);
    root.style.setProperty('--accent-primary', currentTheme.colors.accent);
    root.style.setProperty('--surface-glass', currentTheme.colors.surface);
    root.style.setProperty('--theme-color', currentTheme.colors.accent);
  }, [currentTheme]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPreset = PRESETS[activePresetIdx];

  const handleNext = () => {
    setActivePresetIdx((prev) => (prev + 1) % PRESETS.length);
  };

  const handlePrev = () => {
    setActivePresetIdx((prev) => (prev - 1 + PRESETS.length) % PRESETS.length);
  };

  return (
    <div
      className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-primary)] selection:text-white font-body"
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
          colors={currentTheme.liquidColors}
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
      <header ref={navRef} className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-8 flex justify-between items-center ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
        <div className="text-3xl font-extrabold tracking-tighter pointer-events-auto cursor-default select-none transition-transform hover:scale-105">
          <span className="text-white">H</span><span className="text-[var(--theme-color)]">K</span>
        </div>
        <nav className="hidden md:flex gap-12 pointer-events-auto">
          <button
            onClick={() => setThemeSelectorOpen(true)}
            className="flex items-center gap-2 text-[11px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.2em]"
            aria-label="Open color picker"
          >
            <Palette size={14} />
            <span>Theme</span>
          </button>
          <a href="#about" className="text-[11px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.2em]">About</a>
          <a href="#skills" className="text-[11px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.2em]">Skills</a>
          <a href="#projects" className="text-[11px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.2em]">Projects</a>
          <a href="#contact" className="text-[11px] font-bold hover:text-[var(--theme-color)] transition-colors uppercase tracking-[0.2em]">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
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
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-12">
            <button
              onClick={() => {
                setThemeSelectorOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-4 text-xl font-extrabold uppercase tracking-widest text-white hover:text-[var(--accent-primary)] transition-colors"
              aria-label="Customize theme"
            >
              <Palette size={24} />
              <span>Theme</span>
            </button>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="text-xl font-extrabold uppercase tracking-widest text-white hover:text-[var(--theme-color)] transition-colors">About</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="text-xl font-extrabold uppercase tracking-widest text-white hover:text-[var(--theme-color)] transition-colors">Skills</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="text-xl font-extrabold uppercase tracking-widest text-white hover:text-[var(--theme-color)] transition-colors">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="text-xl font-extrabold uppercase tracking-widest text-white hover:text-[var(--theme-color)] transition-colors">Contact</a>
          </nav>
        </div>
      )}


      {themeSelectorOpen && (
        <ThemeSelector
          currentThemeId={currentTheme.id}
          onThemeChange={setCurrentTheme}
          onClose={() => setThemeSelectorOpen(false)}
        />
      )}

      {/* Hero / About Section */}
      <section id="home" ref={heroRef} className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6 pt-20 pointer-events-none">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center mt-[-5vh]">
          <h1 className="text-[12vw] md:text-[10rem] font-extrabold tracking-tighter leading-[0.85] mb-12 select-none opacity-90 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 font-display">
            <div className="hero-text-line">HEMANTH</div>
            <div className="hero-text-line">KUMAR</div>
          </h1>

          <div className="hero-controls mb-16 w-full max-w-md pointer-events-auto">
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
                <div key={currentPreset.name}>
                  <h2 className="text-2xl font-extrabold uppercase tracking-[0.2em] mb-1 font-display">
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
            <div className="hero-controls flex flex-col items-center gap-6 pointer-events-auto">
              <button
                onClick={() => setThemeSelectorOpen(true)}
                className="group relative flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                aria-label="Open color picker"
              >
                <div
                  className="w-8 h-8 rounded-full border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors duration-500"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                />
                <span className="text-sm font-extrabold uppercase tracking-widest">Customize Theme</span>
                <Palette size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="relative z-10 w-full min-h-screen pt-24">
        <div className="px-6 mb-12 max-w-7xl mx-auto flex flex-col items-center skills-title">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 font-display">Skills</h2>
          <div className="w-24 h-1 bg-[var(--theme-color)] mt-4"></div>
        </div>

        <div className="h-[70vh] border-y border-white/5 backdrop-blur-sm">
          <FlowingMenu
            items={SKILL_ITEMS}
            speed={12}
            marqueeBgColor="rgba(255,255,255,0.95)"
            marqueeTextColor="#000"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 about-section" id="about">
          <div className="flex flex-col justify-center about-content">
            <h3 className="text-3xl font-extrabold tracking-tighter uppercase mb-8 font-display">About</h3>
            <p className="text-gray-300 leading-loose text-lg font-normal tracking-wide">
              Hemanth Kumar focuses on the intersection of Artificial Intelligence and human-centric design.
              I specialize in building intelligent agents and adaptive systems that enhance human capabilities,
              creating software that is not just functional, but truly smart.
            </p>
          </div>
          <div className="flex items-center justify-center about-content">
            <div className="about-card-wrapper">
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
                behindGlowColor={currentTheme.colors.accent}
                onContactClick={() => window.location.href = '#contact'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Bento Grid */}
      <section id="projects" ref={projectsRef} className="relative z-10 w-full min-h-screen py-32 border-t border-white/5 backdrop-blur-sm bg-black/20">
        <div className="px-6 max-w-7xl mx-auto projects-title">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 font-display">Projects</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest leading-loose text-right font-body">
              A comprehensive record of experimental prototypes and production-ready systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px] projects-grid">
            {PROJECT_ITEMS.map((project) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className={`group relative border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-500 cursor-pointer block overflow-hidden bg-white/[0.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] project-card ${project.className}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--theme-color),transparent)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0" />

                <div className="relative z-20 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono opacity-50 px-2 py-1 border border-white/20 rounded-md bg-black/40 backdrop-blur-md">0{project.id}</span>
                    <div className="p-2 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-[var(--theme-color)] transition-colors line-clamp-2">{project.title}</h4>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{project.category} &mdash; {project.year}</p>
                  </div>
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
