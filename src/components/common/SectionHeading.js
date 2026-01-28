/**
 * SectionHeading 컴포넌트
 * 섹션의 헤더 영역을 담당하는 컴포넌트
 * 
 * @param {Object} props
 * @param {string} [props.eyebrow] - 제목 위에 표시되는 작은 텍스트
 * @param {string} props.title - 섹션 제목
 * @param {string} [props.description] - 섹션 설명
 * @param {string} [props.variant] - 스타일 변형 (예: 'about')
 * @returns {JSX.Element}
 */
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

export default SectionHeading;
