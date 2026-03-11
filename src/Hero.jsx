import { useEffect, useRef } from "react";
import './style/Hero.css'
import Tilt  from 'react-parallax-tilt'
import Typed from 'typed.js'

function Hero() {
  // const typed = new Typed('#status-typed', {
  //   strings: ["First sentence.", "Second sentence.", "Third sentence."],
  //   typeSpeed: 50,
  //   backSpeed: 30,
  //   backDelay: 1500,
  // });
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Open to Software Engineering Roles",
        "Building Full-Stack Applications",
        "Designing Backend Systems",
        "About to graduate!",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero" id="hero">
        <div className="hero-container">
          <div className="left-hero">
            <h2 className="oswald-500 profession">FULL-STACK DEVELOPER</h2>
            <h1 className="hero-name barrio-regular">Brendan<br></br> Walls</h1>
            <p className="oswald-300"></p>
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
              <div className="computer">
                <div className="window-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <pre>
                  <code>
                    <span className="keyword">const</span> <span className="variable">developer</span> = <span className="brace">{'{'}</span><br/>

                    {'    '}<span className="property">name</span>: <span className="string">"Brendan Walls"</span>,<br/>
                    {'    '}<span className="property">title</span>: <span className="string">"Full-Stack Developer"</span>,<br/>
                    {'    '}<span className="property">status</span>: <span className="string">"</span>
                    <span className='string' ref={el}></span><span className="string">"</span><br/>
                    {'    '}<span className="property">education</span>: <span className="brace">{'{'}</span><br/>
                    {'        '}<span className="property">school</span>: <span className="string">"James Madison University"</span>,<br/>
                    {'        '}<span className="property">degree</span>: <span className="string">"Bachelor's of Science"</span>,<br/>
                    {'        '}<span className="property">major</span>: <span className="string">"Computer Science"</span>,<br/>
                    {'        '}<span className="property">graduation</span>: <span className="string">"August 2026"</span><br/>
                    {'    '}<span className="brace">{'}'}</span>,<br/>

                    {'    '}<span className="property">focus</span>: <span className="bracket">[</span>
                    <span className="string">"API Development"</span>,
                    <span className="string">"Backend Systems"</span>,
                    <span className="string">"Databases"</span>
                    <span className="bracket">]</span>,<br/>

                    {'    '}<span className="property">languages</span>: <span className="bracket">[</span>
                    <span className="string">"Python"</span>,
                    <span className="string">"Java"</span>,
                    <span className="string">"JavaScript"</span>,
                    <span className="string">"HTML"</span>,
                    <span className="string">"CSS"</span>
                    <span className="bracket">]</span>,<br/>

                    <span className="brace">{'}'}</span>
                  </code>
                </pre>
              </div>
            </Tilt>
          </div>
        </div>
    </div>
  )
}

export default Hero