import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Quote from './components/Quote';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Marquee />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <ContactFooter />
    </div>
  );
}

export default App;
