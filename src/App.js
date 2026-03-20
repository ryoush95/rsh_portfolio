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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 다크모드 적용
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // 페이지 로딩 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <div className={`app${isLoaded ? ' app--loaded' : ''}`} id="top">
        <Header isTop={isTop} navLinks={navLinks} onNavigate={handleNavigate} isDark={isDark} onToggleDark={() => setIsDark((d) => !d)} />
        <Hero />

        <main>
          <AboutSection profileColumns={profileColumns} />
          <SkillsSection skillCategories={skillCategories} />
          <ProjectsSection projects={projects} />
          <CareerSection career={career} />
        </main>

        <Footer />
      </div>

      <button
        className={`scroll-top-btn${isTop ? ' is-hidden' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로 이동"
      >
        ↑
      </button>
    </>
  );
}

export default App;
