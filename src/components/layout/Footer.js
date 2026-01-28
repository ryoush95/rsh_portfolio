/**
 * Footer 컴포넌트
 * 사이트 하단 푸터
 * 
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-title"></p>
        <p className="footer-contact">
          이메일: <a href="mailto:rshsh2433@gmail.com">rshsh2433@gmail.com</a>
        </p>
        <p className="footer-note">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
