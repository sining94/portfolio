import '../../styles/Projects.scss';

import { useState } from 'react';
import Slider from 'react-slick';

import project1 from '../../assets/images/projects/img_pro01.png';
import project2 from '../../assets/images/projects/img_pro02.png';
import project3 from '../../assets/images/projects/img_pro03.png';
import project4 from '../../assets/images/projects/img_pro04.png';
import project5 from '../../assets/images/projects/img_pro05.png';
import project6 from '../../assets/images/projects/img_pro06.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <Slider {...settings} className="projects-slider">
        <ProjectItem
          image={project1}
          title="HTML/CSS 습작"
          description="PC 습작 페이지"
          link={'https://sining94.github.io/month5_etude1.github.io/'}
        />
        <ProjectItem
          image={project2}
          title="HTML/CSS 습작"
          description="PC, MO 반응형 습작"
          link={'https://sining94.github.io/month4_etude2.github.io/'}
        />
        <ProjectItem
          image={project3}
          title="PC 습작 페이지"
          description="PC 습작 페이지"
          link={'https://sining94.github.io/starbucks.github.io/index.html'}
        />
        <ProjectItem image={project4} title="갤럭시 게임 플레이즈" description="퍼블리싱 작업" />
        <ProjectItem
          image={project5}
          title="광고 송출 관리 시스템 SPA 리팩토링"
          description="레거시 PHP 시스템을 React SPA 구조로 리뉴얼하여 광고 송출 관리를 효율화했습니다. 상태 관리와 컴포넌트 기반 UI를 적용했습니다."
        />
        <ProjectItem
          image={project6}
          title="랭킹빌더 UI 개발 및 반응형 퍼블리싱"
          description="실시간 랭킹 데이터를 시각화하는 랭킹빌더 페이지의 프론트엔드를 단독 구현했습니다. 구조 설계부터 컴포넌트 제작, 반응형 대응까지 전체 UI 개발을 맡았습니다."
        />
      </Slider>
    </section>
  );
};

export default Projects;
