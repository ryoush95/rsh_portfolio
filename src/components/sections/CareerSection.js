import { SectionBanner } from '../common';

/**
 * CareerSection 컴포넌트
 * 경력 정보를 표시하는 섹션
 * 
 * @param {Object} props
 * @param {Array} props.career - 경력 배열
 * @returns {JSX.Element}
 */
const CareerSection = ({ career }) => {
  return (
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
  );
};

export default CareerSection;
