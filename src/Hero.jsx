import React from 'react'
import './style/Hero.css'

function Hero() {
  return (
    <div className="hero" id="hero">
        <div className="hero-container">
          <div className="left-hero">
            <h2 className="oswald-500 profession">FULL-STACK DEVELOPER</h2>
            <h1 className="hero-name barrio-regular">Brendan<br></br> Walls</h1>
            <p className="oswald-300">Hello, I'm Brendan! I'm a full-stack developer from Richmond, VA. </p>
          </div>
          <div className="right-hero">
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

                    {'    '}<span className="property">frameworks</span>: <span className="bracket">[</span>
                    <span className="string">"Django"</span>,
                    <span className="string">"React"</span>
                    <span className="bracket">]</span>,<br/>

                    {'    '}<span className="property">data</span>: <span className="bracket">[</span>
                    <span className="string">"SQL"</span>,
                    <span className="string">"Data Analytics"</span>,
                    <span className="string">"Machine Learning"</span>
                    <span className="bracket">]</span>,<br/>

                    {'    '}<span className="property">status</span>: <span className="string">"Open to Software Engineering Roles"</span><br/>

                    <span className="brace">{'}'}</span>
                  </code>
                </pre>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero