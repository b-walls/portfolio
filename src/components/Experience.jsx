import "../style/Experience.css"

function Experience() {
  return (
    <section className="experience" id="experience">
        <div className="timeline">
            <div className="timeline-box">
              <div className="timeline-card">
                <div className="employer">
                  <h2 className="oswald-500 employer-heading">James Madison University</h2>
                  <h2 className="oswald-500 employer-heading">JAN 2025 - MAY 2025</h2>
                </div>
                <h1 className="position">Research Assistant</h1>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="timeline-box">
              <div className="timeline-card">
                <div className="employer">
                  <h2 className="oswald-500 employer-heading">Vairav Technology</h2>
                  <h2 className="oswald-500 employer-heading">OCT 2024 - DEC 2024</h2>
                </div>
                <h1 className="position">Machine Learning Engineer</h1>
              </div>
            </div>
            <div className="timeline-box">
              <div className="timeline-card">
                <div className="employer">
                  <h2 className="oswald-500 employer-heading">Vairav Technology</h2>
                  <h2 className="oswald-500 employer-heading">JUNE 2024 - OCT 2024</h2>
                </div>
                <h1 className="position">Machine Learning Engineer Intern</h1>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Experience