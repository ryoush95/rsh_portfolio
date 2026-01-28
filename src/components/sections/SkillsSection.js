import { SectionBanner } from '../common';

/**
 * SkillsSection 컴포넌트
 * 기술 스택을 표시하는 섹션
 * 
 * @param {Object} props
 * @param {Array} props.skillCategories - 스킬 카테고리 배열
 * @returns {JSX.Element}
 */
const SkillsSection = ({ skillCategories }) => {
  return (
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
                  <span 
                    className={`skill-tag skill-tag--${tag.tone}`} 
                    key={tag.label}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
