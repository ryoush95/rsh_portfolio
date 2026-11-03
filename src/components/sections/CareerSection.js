import { SectionBanner } from '../common';
import useFadeIn from '../../hooks/useFadeIn';

/**
 * CareerSection 컴포넌트
 * 경력을 회사별 한 줄 타임라인으로 표시하는 섹션 (상세 내용은 프로젝트 섹션에서 관리)
 *
 * @param {Object} props
 * @param {Array} props.career - 경력 배열 (company, period, role, projects)
 * @returns {JSX.Element}
 */
const CareerSection = ({ career }) => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section ref={ref} className={`section fade-in${isVisible ? ' is-visible' : ''}`} id="career">
      <div className="container">
        <SectionBanner title="CAREER" variant="career" />
        <ol className="career-list">
          {career.map((job) => (
            <li className="career-row" key={job.company}>
              <strong className="career-company">{job.company}</strong>
              <span className="career-period">{job.period}</span>
              <span className="career-role">{job.role}</span>
              <span className="career-projects">{job.projects.join(', ')}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CareerSection;
