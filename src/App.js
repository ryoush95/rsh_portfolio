import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';

const {
  navLinks,
  profileColumns,
  skillCategories,
  projects,
  career
} = data;

const ICONS = {
  link: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.5 13.5 8.41 15.59a3 3 0 0 1-4.24-4.24l2.18-2.18a3 3 0 0 1 4.24 0" />
      <path d="M13.5 10.5 15.59 8.41a3 3 0 1 1 4.24 4.24l-2.18 2.18a3 3 0 0 1-4.24 0" />
    </svg>
  ),
  code: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m12 5-2 14" />
    </svg>
  ),
  browser: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <circle cx="7" cy="6" r="0.8" />
      <circle cx="10" cy="6" r="0.8" />
    </svg>
  ),
  database: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5.5" rx="7" ry="3.5" />
      <path d="M19 10c0 1.93-3.13 3.5-7 3.5S5 11.93 5 10" />
      <path d="M19 15c0 1.93-3.13 3.5-7 3.5S5 16.93 5 15V5.5" />
    </svg>
  ),
  cloud: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 18a4 4 0 0 1 0-8 4.5 4.5 0 0 1 8.7-1.5 3.5 3.5 0 1 1 1.3 6.8Z" />
    </svg>
  ),
  rocket: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2c2.9 0 6 3 6 6.5 0 3.8-2.1 7.1-6 10.3-3.9-3.2-6-6.5-6-10.3C6 5 9.1 2 12 2Z" />
      <path d="M12 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="m9 14.5-1 4 4-1 4 1-1-4" />
      <path d="M9 18 7.5 20" />
      <path d="M15 18 16.5 20" />
    </svg>
  ),
  briefcase: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 15h4" />
    </svg>
  ),
  spark: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 4 1.86 4.6 4.94.37-3.84 3.06 1.32 4.83L12 14.5l-4.28 2.36 1.32-4.83-3.84-3.06 4.94-.37Z" />
    </svg>
  ),
  people: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M4 21a4 4 0 0 1 8 0" />
      <path d="M12 21a4 4 0 0 1 8 0" />
    </svg>
  ),
  user: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8.5" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  ),
  phone: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  ),
  calendar: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="3" y1="11" x2="21" y2="11" />
    </svg>
  ),
  mail: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7.5 12 13l9-5.5" />
    </svg>
  ),
  location: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  ),
  pencil: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m4 20 4.6-.95a2.1 2.1 0 0 0 1-.54L20 8.12a1.5 1.5 0 0 0 0-2.12l-1.95-1.95a1.5 1.5 0 0 0-2.12 0L5.54 15.4a2.1 2.1 0 0 0-.54 1Z" />
      <path d="m14.5 5.5 4 4" />
    </svg>
  ),
  github: () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.02 1.76 2.67 1.25 3.32.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.06 0 0 .98-.31 3.2 1.19.93-.26 1.93-.39 2.93-.39s2 .13 2.93.39c2.22-1.5 3.2-1.19 3.2-1.19.63 1.6.23 2.77.11 3.06.75.81 1.2 1.83 1.2 3.09 0 4.41-2.7 5.39-5.27 5.68.42.36.8 1.06.8 2.14 0 1.57-.01 2.83-.01 3.21 0 .31.21.68.81.56C20.22 21.39 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
};

const Icon = ({ name }) => {
  const RenderIcon = ICONS[name];
  return RenderIcon ? <RenderIcon /> : null;
};

const SectionBanner = ({ title, variant }) => {
  const classNames = ['section-banner'];
  if (variant) {
    classNames.push(`section-banner--${variant}`);
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="section-banner-inner">
        <h2 className="section-banner-title">{title}</h2>
        <div className="section-banner-divider" />
      </div>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, description, variant }) => {
  const headerClassNames = ['section-heading'];
  if (variant) {
    headerClassNames.push(`section-heading--${variant}`);
  }

  return (
    <header className={headerClassNames.join(' ')}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <div className="section-heading-row">
        <h2 className="section-title">{title}</h2>
      </div>
      {variant === 'about' ? <div className="section-heading-divider" /> : null}
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
};

function App() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (target) => {
    const node = document.querySelector(target);
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="app" id="top">
      <header className={`site-header ${isTop ? 'is-top' : 'is-solid'}`}>
        <div className="site-header-inner">
          <button className="site-logo" type="button" onClick={() => handleNavigate('#top')}>유승훈'S PORTFOLIO</button>
          <nav className="site-nav">
            {navLinks.map((link) => (
              link.href ? (
                <a
                  key={link.label}
                  className="site-nav-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.target}
                  type="button"
                  className="site-nav-link"
                  onClick={() => handleNavigate(link.target)}
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>
        </div>
      </header>
      <header className="hero">
        <div className="container">
          <p className="hero-eyebrow">유승훈&apos;s Portfolio</p>
          <h1 className="hero-title">Mobile App Developer 유승훈</h1>
          <p className="hero-subtitle">
            최신 기술을 빠르게 흡수해 사용자 경험과 가치를 동시에 끌어올리는 데 집중하고 있습니다.
          </p>
        </div>
      </header>

      <main>
        <section className="section about-section" id="about">
          <div className="container">
            <SectionHeading title="ABOUT ME" variant="about" />
            <div className="profile-grid">
              {profileColumns.map((column, columnIndex) => (
                <div className="profile-column" key={columnIndex}>
                  {column.map((item) => {
                    const lines = item.value.split('\n');
                    return (
                      <div className="profile-entry" key={item.label}>
                        <span className="profile-icon" aria-hidden="true">
                          <Icon name={item.icon} />
                        </span>
                        <div className="profile-copy">
                          <p className="profile-label">{item.label}</p>
                          <p className="profile-value">
                            {lines.map((line, index) => (
                              <span key={`${item.label}-${index}`}>
                                {line}
                                {index < lines.length - 1 ? <br /> : null}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionBanner title="SKILLS" variant="skills" />
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <article className="skill-card" key={category.category}>
                  <div className="skill-card-header">
                    <h3>{category.category}</h3>
                  </div>
                  <div className="skill-card-tags">
                    {category.tags.map((tag) => (
                      <span className={`skill-tag skill-tag--${tag.tone}`} key={tag.label}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionBanner title="PROJECTS" variant="projects" />
            <p className="section-lead">지금까지 개발한 대표 프로젝트들을 선별했습니다.</p>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-header">
                    <h3>{project.name}</h3>
                    <p className="project-period">{project.period}</p>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {project.url ? (
                    <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                      {project.linkLabel || '링크'}
                    </a>
                  ) : null}
                  <p className="project-stack">{project.stack}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="career">
          <div className="container">
            <SectionBanner title="CAREER" variant="career" />
            <p className="section-lead">회사와 개발자가 성장하는 방향에 맞춰 역할을 확장해왔습니다.</p>
            <div className="career-list">
              {career.map((job) => (
                <article className="career-card" key={job.company}>
                  <div className="career-header">
                    <h3>{job.company}</h3>
                    <p className="career-period">{job.period}</p>
                  </div>
                  <p className="career-tagline">{job.tagline}</p>
                  <ul className="career-details">
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="career-highlights">
                    <h4>주요 하이라이트</h4>
                    <ul>
                      {job.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-title"></p>
          <p className="footer-contact">
            이메일: <a href="mailto:rshsh2433@gmail.com">rshsh2433@gmail.com</a>
          </p>
          <p className="footer-note">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
