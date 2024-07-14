import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
      <div className="skills-content">
        {skills.map((skillCategory, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-medium mb-4">{skillCategory.category}:</h3>
            <Slider {...settings} className="skills-carousel">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="p-2">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center h-24 w-24 mx-auto">
                    <img src={skill.image} alt={skill.name} className="max-w-full max-h-full" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=kimforee&show_icons=true&locale=en&layout=compact"
            alt="kimforee"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
