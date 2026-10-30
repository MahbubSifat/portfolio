import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollSequence from "../components/ScrollSequence";
import HeroContent from "../components/HeroContent";
import AboutContent from "../components/AboutContent";
import ExperienceSection from "../components/ExperienceSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const { hash } = useLocation();

  // অন্য page থেকে "/#projects"-এর মতো link-এ এলে সেই section-এ নিয়ে যায়।
  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60, duration: 1.2 });
      else el.scrollIntoView();
    }, 600);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      {/* 1. Hero: cinematic scroll sequence */}
      <div id="hero" className="relative">
        <ScrollSequence name="hero" frameCount={96} scrollLength={2800}>
          {(progress) => <HeroContent progress={progress} />}
        </ScrollSequence>
      </div>

      {/* 2. Education and learning journey (breathing space after the hero) */}
      <ExperienceSection />

      {/* 3. About: second cinematic sequence */}
      <div id="about" className="relative">
        <ScrollSequence name="about" frameCount={192} scrollLength={3500} lazy>
          {(progress) => <AboutContent progress={progress} />}
        </ScrollSequence>
      </div>

      {/* 4. About me in full text */}
      <AboutSection />

      {/* 5. Skills */}
      <SkillsSection />

      {/* 6. Projects */}
      <ProjectsSection />

      {/* 7. Contact */}
      <ContactSection />

    </>
  );
}
