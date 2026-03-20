import { SectionBanner } from '../common';
import useFadeIn from '../../hooks/useFadeIn';

/**
 * SkillsSection 컴포넌트
 * 기술 스택을 아이콘 그리드로 표시하는 섹션
 *
 * @param {Object} props
 * @param {Array} props.skillCategories - 스킬 카테고리 배열
 * @returns {JSX.Element}
 */
const SkillsSection = ({ skillCategories }) => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section ref={ref} className={`section skills-section fade-in${isVisible ? ' is-visible' : ''}`} id="skills">
      <div className="container">
        <SectionBanner title="SKILLS" variant="skills" />
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.category}>
            <h3 className="skill-category-title">{category.category}</h3>
            <div className="skills-icon-grid">
              {category.tags.map((tag) => (
                <div className="skill-icon-item" key={tag.label}>
                  <div className="skill-icon-box">
                    <img src={tag.icon} alt={tag.label} />
                  </div>
                  <span className="skill-icon-label">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
