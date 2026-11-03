import { useState } from 'react';
import { SectionBanner } from '../common';
import useFadeIn from '../../hooks/useFadeIn';

/**
 * ProjectCard 컴포넌트
 * 개발 스택은 태그로, 담당업무·성과는 토글로 펼쳐서 표시
 *
 * @param {Object} props
 * @param {Object} props.project - 프로젝트 정보
 * @param {string} props.detailId - 펼침 영역 id
 * @returns {JSX.Element}
 */
const ProjectCard = ({ project, detailId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const stackItems = project.stack.split(',').map((item) => item.trim()).filter(Boolean);

  return (
    <article className={`project-card${project.discontinued ? ' is-discontinued' : ''}`}>
      <div className="project-header">
        <h3>
          {project.name}
          {project.discontinued && <span className="project-badge-discontinued">서비스 종료</span>}
        </h3>
        <p className="project-period">{project.period}</p>
      </div>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-stack">
        {stackItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        type="button"
        className="project-toggle"
        aria-expanded={isOpen}
        aria-controls={detailId}
        onClick={() => setIsOpen((open) => !open)}
      >
        담당 역할 및 주요 내용
        <span className="project-toggle-icon" aria-hidden="true">+</span>
      </button>
      <div
        className={`project-details-wrap${isOpen ? ' is-open' : ''}`}
        id={detailId}
        inert={!isOpen}
      >
        <div className="project-details">
          {project.bulletGroups ? (
            project.bulletGroups.map((group) => (
              <div className="project-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {project.url ? (
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
          {project.linkLabel || '링크'}
        </a>
      ) : null}
    </article>
  );
};

/**
 * ProjectsSection 컴포넌트
 * 프로젝트 목록을 표시하는 섹션
 *
 * @param {Object} props
 * @param {Array} props.projects - 프로젝트 배열
 * @returns {JSX.Element}
 */
const ProjectsSection = ({ projects }) => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section ref={ref} className={`section fade-in${isVisible ? ' is-visible' : ''}`} id="projects">
      <div className="container">
        <SectionBanner title="PROJECTS" variant="projects" />
        <div className="projects-grid">
          {[...projects].sort((a, b) => (a.discontinued ? 1 : 0) - (b.discontinued ? 1 : 0)).map((project, index) => (
            <ProjectCard project={project} detailId={`project-details-${index}`} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
