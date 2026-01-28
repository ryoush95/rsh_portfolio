/**
 * Header 컴포넌트
 * 사이트 상단 네비게이션 헤더
 * 
 * @param {Object} props
 * @param {boolean} props.isTop - 스크롤이 최상단에 있는지 여부
 * @param {Array} props.navLinks - 네비게이션 링크 목록
 * @param {Function} props.onNavigate - 네비게이션 클릭 핸들러
 * @returns {JSX.Element}
 */
const Header = ({ isTop, navLinks, onNavigate }) => {
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
