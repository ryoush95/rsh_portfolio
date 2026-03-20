/**
 * Hero 컴포넌트
 * 메인 히어로 섹션
 *
 * @returns {JSX.Element}
 */
const Hero = () => {
  return (
    <header className="hero">
      <div className="container">
        <h1 className="hero-title">유승훈</h1>
        <p className="hero-subtitle">Mobile App Developer</p>
        <p className="hero-tags">Flutter · iOS · Android</p>
        <p className="hero-description">
          최신 기술을 빠르게 흡수해 사용자 경험과 가치를 동시에 끌어올리는데
          집중하고 있습니다.
        </p>
      </div>
    </header>
  );
};

export default Hero;
