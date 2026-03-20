/**
 * Header 컴포넌트
 * 사이트 상단 네비게이션 헤더
 * 
 * @param {Object} props
 * @param {boolean} props.isTop - 스크롤이 최상단에 있는지 여부
 * @param {Array} props.navLinks - 네비게이션 링크 목록
 * @param {Function} props.onNavigate - 네비게이션 클릭 핸들러
 * @param {boolean} props.isDark - 다크모드 여부
 * @param {Function} props.onToggleDark - 다크모드 토글 핸들러
 * @returns {JSX.Element}
 */
const Header = ({ isTop, navLinks, onNavigate, isDark, onToggleDark }) => {
  return (
    <header className={`site-header ${isTop ? 'is-top' : 'is-solid'}`}>
      <div className="site-header-inner">
        <button 
          className="site-logo" 
          type="button" 
          onClick={() => onNavigate('#top')}
        >
          유승훈'S PORTFOLIO
        </button>
        <button
          type="button"
          className={`theme-switch${isDark ? ' is-dark' : ''}`}
          onClick={onToggleDark}
          aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
        >
          <span className="theme-switch-icon theme-switch-sun">☀︎</span>
          <span className="theme-switch-icon theme-switch-moon">☾</span>
          <span className="theme-switch-knob" />
        </button>
        <nav className="site-nav">
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                className="site-nav-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.target}
                type="button"
                className="site-nav-link"
                onClick={() => onNavigate(link.target)}
              >
                {link.label}
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
