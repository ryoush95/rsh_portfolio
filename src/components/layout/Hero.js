/**
 * 개발 방식 카드에 표시할 단계
 */
const APPROACH_STEPS = [
  { title: 'Build', icon: '+', description: '새로운 앱을 구축하고' },
  { title: 'Release', icon: '↗', description: '스토어에 배포·운영하며' },
  { title: 'Solve', icon: '✓', description: '문제의 원인을 해결합니다' },
];

/**
 * Hero 컴포넌트
 * 메인 히어로 섹션 (소개 문구 + 개발 방식 코드 카드)
 *
 * @param {Object} props
 * @param {Function} props.onNavigate - 섹션 이동 핸들러
 * @param {string} props.githubUrl - GitHub 프로필 주소
 * @returns {JSX.Element}
 */
const Hero = ({ onNavigate, githubUrl }) => {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Mobile App Developer</p>
          <h1 className="hero-title">
            개발부터 배포·운영까지,
            <span className="hero-title-accent">서비스의 완성도를 높입니다.</span>
          </h1>
          <p className="hero-description">
            Flutter를 기반으로 iOS/Android 앱 신규 개발, 앱스토어 배포와
            운영, 결제·푸시, 성능 개선을 경험한 약 4년 경력의 모바일 앱
            개발자 유승훈입니다.
          </p>
          <div className="hero-actions">
            <button type="button" className="hero-btn hero-btn-primary" onClick={() => onNavigate('#projects')}>
              프로젝트 보기 <span aria-hidden="true">↗</span>
            </button>
            <button type="button" className="hero-btn hero-btn-outline" onClick={() => onNavigate('#career')}>
              경력 보기 <span aria-hidden="true">↓</span>
            </button>
            {githubUrl ? (
              <a className="hero-link" href={githubUrl} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
          <ul className="hero-meta">
            <li><strong>약 4년</strong> 개발 경험</li>
            <li>Flutter · Dart</li>
            <li>iOS · Android · 운영</li>
          </ul>
        </div>

        <div className="hero-card" aria-hidden="true">
          <div className="hero-card-bar">
            <span className="hero-card-dots"><i /><i /><i /></span>
            <span className="hero-card-file">developer.approach</span>
          </div>
          <div className="hero-card-body">
            <p className="hero-code">
              <span className="code-keyword">const</span> <span className="code-name">developer</span> = <span className="code-brace">{'{'}</span>
            </p>
            <ol className="hero-steps">
              {APPROACH_STEPS.map((step, index) => (
                <li className="hero-step" key={step.title}>
                  <span className="hero-step-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="hero-step-icon">{step.icon}</span>
                  <span className="hero-step-copy">
                    <strong>{step.title}</strong>
                    <span>{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="hero-code">
              <span className="code-brace">{'}'}</span>;
            </p>
          </div>
          <p className="hero-card-footer">From development to operation</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
