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
        <p className="hero-eyebrow">유승훈&apos;s Portfolio</p>
        <h1 className="hero-title">Mobile App Developer 유승훈</h1>
        <p className="hero-subtitle">
          최신 기술을 빠르게 흡수해 사용자 경험과 가치를 동시에 끌어올리는 데 집중하고 있습니다.
        </p>
      </div>
    </header>
  );
};

export default Hero;
