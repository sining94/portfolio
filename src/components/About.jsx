import { Typewriter } from 'react-simple-typewriter';
import '../styles/About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="parallax-bg" />
      <div className="about-content">
        <h2>About Me</h2>
        <h3>
          <Typewriter
            words={['Web Publisher', 'Frontend Developer', 'Creative Coder']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p>
          안녕하세요. 저는 <strong>이용주</strong>입니다. 11개월간 웹에이전시에서 HTML/CSS 기반
          퍼블리싱을 담당했고, 이후 2년간 광고송출관리 페이지를 React로 제작하며 JS, TS, API 등
          다양한 프론트엔드 기술을 익혔습니다. 현재는 퍼블리셔와 프론트엔드 사이의 포지션에서 더욱
          성장 중입니다.
        </p>
      </div>
    </section>
  );
};

export default About;
