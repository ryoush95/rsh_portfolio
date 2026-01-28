/**
 * SectionBanner 컴포넌트
 * 각 섹션의 상단에 표시되는 배너 컴포넌트
 * 
 * @param {Object} props
 * @param {string} props.title - 배너 제목
 * @param {string} [props.variant] - 스타일 변형 (예: 'skills', 'projects', 'career')
 * @returns {JSX.Element}
 */
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

export default SectionBanner;
