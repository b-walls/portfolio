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
            <p>Hello, I’m Brendan. I’m a full stack developer pursuing a Bachelor of Science in Computer Science at James Madison University. I have experience building backend systems with Django and FastAPI, as well as creating user-focused front ends using React, Bootstrap, and Tailwind. I’m currently looking for opportunities where I can contribute to a team of developers, make a meaningful impact, and continue growing my skills.</p>
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