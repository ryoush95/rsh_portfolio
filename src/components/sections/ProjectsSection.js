import { SectionBanner } from '../common';

/**
 * ProjectsSection 컴포넌트
 * 프로젝트 목록을 표시하는 섹션
 * 
 * @param {Object} props
 * @param {Array} props.projects - 프로젝트 배열
 * @returns {JSX.Element}
 */
const ProjectsSection = ({ projects }) => {
  return (
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
                <a 
                  className="project-link" 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  {project.linkLabel || '링크'}
                </a>
              ) : null}
              <p className="project-stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
