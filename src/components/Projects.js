import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';
import 'tailwindcss/tailwind.css';
import project1Image from '../assets/images/ok.svg';
import project2Image from '../assets/images/ok.svg';

const projects = [
  {
    title: 'Windows Task Manager',
    description: 'Developed process boosting, unboosting, and termination functionalities for enhanced system management using Qt and C++.',
    image: project1Image,
    link: 'https://github.com/Kimforee/Windows-TaskManager'
  },
  {
    title: 'War for Dungeons',
    description: '2D platform game with parallax main menu and engaging animations using HTML5 Canvas and JavaScript.',
    image: project2Image,
    link: 'https://github.com/Kimforee/War-for-Dungeons-Wizard-Edition-2D-Game.git'
  },
  {
    title: 'Nest',
    description: 'Social network platform with CRUD functionality and real-time chat using Django and JavaScript.',
    image: project2Image,
    link: 'https://github.com/Kimforee/Nest.git'
  },
  {
    title: 'Bhuvan Voice Assistant',
    description: 'Voice activated search assistant with real-time transcription and response using Django and PyTorch.',
    image: project2Image,
    link: 'https://github.com/Kimforee/Nest.git'
  },
  {
    title: 'CoinMarketCap Scraper',
    description: 'Crypto data scraping tool using Django, Celery, Redis, and Selenium.',
    image: project2Image,
    link: 'https://github.com/Kimforee/crypto-scraper-django-celery'
  }
  // Add more projects as needed
];

const Projects = () => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="projects" className="py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">Projects</h2>
      <Slider {...settings} className="projects-carousel">
        {projects.map((project, index) => (
          <div key={index} className="project-card mx-2">
            <div className="flex items-center mb-2">
              <img className="w-5 mr-2" src={project.image} alt={project.title} />
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
            <p className="text-sm">{project.description}</p>
            <a href={project.link} className="btn mt-4 inline-block text-blue-500">
              View Project
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;