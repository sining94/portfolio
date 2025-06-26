import ReactFullpage from '@fullpage/react-fullpage';
import { useEffect, useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import './App.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };
  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <ReactFullpage
        render={() => (
          <>
            <div id="fullpage-wrapper">
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Skills />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <Contact />
              </div>
            </div>
          </>
        )}
      />
    </>
  );
}

export default App;
