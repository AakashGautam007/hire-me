import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name-highlight">Aakash Gautam</h1>
        <p className="tagline">Welcome to my portfolio! I'm available for hire.</p>
      </header>
      <main className="main-content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with expertise in React, Vite, and modern web technologies. I enjoy building scalable and user-friendly applications.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/your-profile/project1" target="_blank" rel="noopener noreferrer">
                Project 1 - A React-based web app
              </a>
            </li>
            <li>
              <a href="https://github.com/your-profile/project2" target="_blank" rel="noopener noreferrer">
                Project 2 - A Vite-powered portfolio site
              </a>
            </li>
          </ul>
        </section>
        <section className="technologies">
          <h2>Technologies</h2>
          <p>React, Vite, JavaScript, HTML, CSS, Git, GitHub</p>
        </section>
        <section className="interests">
          <h2>Interests</h2>
          <p>Web Development, Open Source, UI/UX Design, Problem Solving</p>
        </section>
        <section className="resume">
          <h2>Resume</h2>
          <a href="/resume.pdf" download>
            <button className="download-btn">Download My Resume</button>
          </a>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: your-email@example.com</p>
        </section>
      </main>
    </div>
  )
}

export default App
