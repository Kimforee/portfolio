import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css';
import 'tailwindcss/tailwind.css';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", image: "https://techstack-generator.vercel.app/python-icon.svg" },
      { name: "C", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
      { name: "C++", image: "https://techstack-generator.vercel.app/cpp-icon.svg" },
      { name: "JavaScript", image: "https://techstack-generator.vercel.app/js-icon.svg" },
      { name: "Java", image: "https://techstack-generator.vercel.app/java-icon.svg" }
    ]
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { name: "Django", image: "https://techstack-generator.vercel.app/django-icon.svg" },
      { name: "Flutter", image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" },
      { name: "Qt", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" },
      { name: "Pandas", image: "https://pandas.pydata.org/static/img/pandas_white.svg" },
      { name: "NumPy", image: "https://numpy.org/images/logo.svg" },
      { name: "Matplotlib", image: "https://matplotlib.org/_static/logo_dark.svg" },
      { name: "RestAPI", image: "https://techstack-generator.vercel.app/restapi-icon.svg" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", image: "https://techstack-generator.vercel.app/docker-icon.svg" },
      { name: "Figma", image: "https://skillicons.dev/icons?i=figma" },
      { name: "VSCode", image: "https://skillicons.dev/icons?i=vscode&perline=12" },
      { name: "MATLAB", image: "https://skillicons.dev/icons?i=matlab" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", image: "https://techstack-generator.vercel.app/mysql-icon.svg" },
      { name: "SQLite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
    ]
  }
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="skills" className="py-8">
      <h2>Skills</h2>
      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3>{skillCategory.category}:</h3>
            <Slider {...settings} className="skills-carousel">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-card-inner">
                    <img src={skill.image} alt={skill.name} width="55" height="55" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
        <p>
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=kimforee&show_icons=true&locale=en&layout=compact"
            alt="kimforee"
          />
        </p>
      </div>
    </section>
  );
};

export default Skills;
