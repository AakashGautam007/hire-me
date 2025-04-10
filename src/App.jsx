import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div id="root">
      <header>
        <h1>Hire Me</h1>
        <p>Welcome to my portfolio! I'm available for hire.</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I am a passionate developer with expertise in React, Vite, and modern web technologies.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://github.com/your-profile/project1" target="_blank">
                Project 1
              </a>
            </li>
            <li>
              <a href="https://github.com/your-profile/project2" target="_blank">
                Project 2
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: your-email@example.com</p>
        </section>
      </main>
    </div>
  )
}

export default App
