import { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import MeshGradient from './components/MeshGradient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import TechMarquee from './components/TechMarquee';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // ── REVEAL OBSERVER ──
    const rvEls = document.querySelectorAll('.rv');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
          }
        });
      },
      { threshold: 0.08 }
    );

    rvEls.forEach((el) => obs.observe(el));

    // Force hero elements to reveal quickly
    const timer = setTimeout(() => {
      document.querySelectorAll('.hero .rv').forEach((el) => el.classList.add('on'));
    }, 100);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background canvas and mesh gradient */}
      <ParticleCanvas />
      <MeshGradient />

      <div className="w">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Stats />
        <Skills />
        <TechMarquee />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
