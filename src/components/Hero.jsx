import ComputerCard from './ComputerCard'
import '../style/Hero.css'
import Tilt  from 'react-parallax-tilt'

function Hero() {
  return (
    <div className="hero" id="hero">
        <div className="hero-container">
          <div className="left-hero">
            <h2 className="oswald-500 profession">FULL-STACK DEVELOPER</h2>
            <h1 className="hero-name barrio-regular">Brendan<br></br> Walls</h1>
            <p className="subtle">Hello, I’m Brendan. I’m a full stack developer pursuing a Bachelor of Science in Computer Science at James Madison University. I’m currently looking for opportunities where I can contribute to a team of developers, make a meaningful impact, and continue growing my skills.</p>
            <div className="hero-cta">
              <button className="primary">
                View projects
              </button>
              <button className="secondary">
                Contact me
              </button>
            </div>
            <div className="info-container">
              <div className="info-card">
                <h2 className="oswald-500">2026</h2>
                <p className="subtle">JMU CS Gradu  ation</p>
              </div>
              <div className="info-card">
                <h2 className="oswald-500">3+ Years</h2>
                <p className="subtle">Experience in software development</p>
              </div>
              <div className="info-card">
                <h2 className="oswald-500">Richmond</h2>
                <p className="subtle">Based in Virginia</p>
              </div>
            </div>
          </div>
          <div className="right-hero">
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              perspective={1200}
              transitionSpeed={5000}
              scale={1.03}
              gyroscope={true}
            >
              <ComputerCard/>
            </Tilt>
          </div>
        </div>
    </div>
  )
}

export default Hero