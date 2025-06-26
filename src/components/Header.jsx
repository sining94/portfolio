import '../styles/Header.scss';
import logo from '../assets/images/ico_logo.png';

const Header = ({ isDark, toggleTheme }) => {
  // 스크롤 이동 기능
  const scrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="이용주 로고" />
        </div>
        <ul className="nav-links">
          <li>
            <button type="button" onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('skills')}>
              Skills
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
