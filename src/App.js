import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';

// 컴포넌트 import
import { Header, Hero, Footer } from './components/layout';
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  CareerSection,
} from './components/sections';

// 데이터 구조 분해
const { navLinks, profileColumns, skillCategories, projects, career } = data;

/**
 * App 컴포넌트
 * 포트폴리오 메인 애플리케이션
 */
function App() {
  const [isTop, setIsTop] = useState(true);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스무스 스크롤 네비게이션
  const handleNavigate = (target) => {
    const node = document.querySelector(target);
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app" id="top">
      <Header isTop={isTop} navLinks={navLinks} onNavigate={handleNavigate} />
      <Hero />

      <main>
        <AboutSection profileColumns={profileColumns} />
        <SkillsSection skillCategories={skillCategories} />
        <ProjectsSection projects={projects} />
        <CareerSection career={career} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
