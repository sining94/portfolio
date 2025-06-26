import React from 'react';

import cssIcon from '../../assets/images/skills/ico_css.svg';
import gitIcon from '../../assets/images/skills/ico_git.svg';
import htmlIcon from '../../assets/images/skills/ico_html.svg';
import javaIcon from '../../assets/images/skills/ico_javascript.svg';
import nextIcon from '../../assets/images/skills/ico_next.svg';
import npmIcon from '../../assets/images/skills/ico_npm.svg';
import reactIcon from '../../assets/images/skills/ico_react.svg';
import sassIcon from '../../assets/images/skills/ico_sass.svg';
import tsIcon from '../../assets/images/skills/ico_typescript.svg';
import zuIcon from '../../assets/images/skills/ico_zustand.svg';

import SkillItem from './SkillItem';

import '../../styles/Skills.scss';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills & Experience</h2>

      <div className="skills-wrapper">
        <div className="skills-grid">
          <SkillItem icon={htmlIcon} name="HTML" />
          <SkillItem icon={cssIcon} name="CSS" />
          <SkillItem icon={reactIcon} name="React" />
          <SkillItem icon={sassIcon} name="Sass" />
          <SkillItem icon={tsIcon} name="TypeScript" />
          <SkillItem icon={javaIcon} name="JavaScript" />
          <SkillItem icon={nextIcon} name="NextJs" />
          <SkillItem icon={zuIcon} name="Zustand" />
          <SkillItem icon={gitIcon} name="Git" />
          <SkillItem icon={npmIcon} name="npm" />
        </div>

        <div className="career-history">
          <div className="career-item">
            <h4>매그넘빈트</h4>
            <p>웹에이전시 / 퍼블리셔 · 11개월</p>
            <p>HTML/CSS 기반 웹사이트 유지보수 및 퍼블리싱</p>
          </div>
          <div className="career-item">
            <h4>애드티브 이노베이션</h4>
            <p>광고 송출 관리 시스템 · 2년</p>
            <p>React 기반 내부 페이지 개발 및 광고상태 관리, Next.js 학습, 상태관리 도입</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
