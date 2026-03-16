import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Analytics } from "@vercel/analytics/react"
import './style/App.css'

function App() {
  return (
    <>
      <Navbar/>
      <main className="app-shell">
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
      </main>
      <Analytics/>
    </>
  )
}

export default App
