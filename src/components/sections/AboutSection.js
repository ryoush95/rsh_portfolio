import { SectionHeading, Icon } from '../common';

/**
 * AboutSection 컴포넌트
 * 프로필 정보를 표시하는 About Me 섹션
 * 
 * @param {Object} props
 * @param {Array} props.profileColumns - 프로필 정보 컬럼 배열
 * @returns {JSX.Element}
 */
const AboutSection = ({ profileColumns }) => {
  return (
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
  );
};

export default AboutSection;
