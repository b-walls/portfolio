import '../style/Skills.css'

function Skills() {
  const skillGroups = [
    {
      category: "LANGUAGES",
      skills: ["Python", "Java", "C", "Javascript", "HTML", "CSS"],
    },
    {
      category: "BACKEND",
      skills: ["Django", "API Development", "SQL", "Deployment"],
    },
    {
      category: "FRONTEND",
      skills: ["React", "Bootstrap", "Tailwind"],
    },
    {
      category: "AI/ML",
      skills: ["Supervised Learning", "Data Analysis", "Classification"],
    },
  ]

  const coursework = [
    "Data Structures & Algorithms",
    "Applied Algorithms",
    "Full Stack Development",
    "Programming Languages",
    "Systems Engineering I/II",
    "Parallel & Distributed Systems"
  ]

  return (
    <section id="skills">
        <div className="skills-container">
            <div className="skills-header">
              <h2 className="oswald-500 mini-heading">SKILLS</h2>
              <h1 className="section-blurb">The skills I've learned along the way.</h1>
              <p className="projects-subtext">
                
              </p>
            </div>
            <div className="skills-content">
                {skillGroups.map((group, index) => (
                  <div className="skills-card" key={index}>
                    <h2 className="oswald-500 skill-card-heading">{group.category}</h2>
                    <div className="pills">
                      {group.skills.map((skill, index) => (
                        <span className='project-skill' key={index}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
        </div>
        <div className="coursework-container">
          <div className="coursework-card">
              <div className="coursework-copy">
                <h2 className="oswald-500 skill-card-heading">COURSEWORK</h2>
                <p className="coursework-subtext">
                  Relevant classes that strengthened my foundation in software engineering, systems, and applied problem solving.
                </p>
              </div>
              <div className="coursework-grid">
                {coursework.map((course, index) => (
                  <div className="course-pill" key={index}>{course}</div>
                ))}
              </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
