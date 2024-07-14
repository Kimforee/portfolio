import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackgroundScene from './components/BackgroundScene';

function App() {
  return (
    <div className="App">
      <BackgroundScene /> 
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Keshav Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
