import "../style/Experience.css"

function Experience() {
  const experienceData = [
    {
      employer: "James Madison University",
      start_date: "JAN 2025",
      end_date: "MAY 2025",
      position: "Research Assistant",
      bullets: [
        "Worked under a professor and graduate student to study wild chimpanzee locomotion",
        "Fine-tuned, DeepLabCut, a pose estimation computer vision model to track chimpanzee locomotion, enabling accurate movement analysis for the biology research team’s study"
      ],
      skills: ["Research", "Computer vision"]
    },
    {
      employer: "Vairav Tech",
      start_date: "OCT 2024",
      end_date: "DEC 2024",
      position: "Software Engineer",
      bullets: [
        "Used user entity behavior analytics (UEBA) to develop a One-Class SVM achieving 96% accuracy identifying anomalous actors within company databases and computer systems",
        "Maintained, retrained, and evaluated machine learning models to ensure accuracy in a continuously updated data pipeline"
      ],
      skills: ["Machine learning", "Anomaly detection", "Security", "Data analytics"]
    },
    {
      employer: "Vairav Tech",
      start_date: "JUN 2024",
      end_date: "OCT 2024",
      position: "Software Engineer Intern",
      bullets: [
        "Led a team of interns, enhancing leadership, mentorship, and time management skills while coordinating tasks and ensuring project deadlines were met",
        "Gained hands-on experience with MLOps and AI system deployment, including model versioning, monitoring, and pipeline automation",
        "Developed a spam email detection model using XGBoost and Random Forest Classifier, achieving 98% accuracy"
      ],
      skills: ["Machine learning", "Supervised learning", "MLOps"]
    }
  ]

  const heading = "Work that mixes software engineering and machine learning."
  const subtext = "A look at the roles and work that have shaped my technical experience."
  return (
    <section className="experience" id="experience">
        <div className="experience-heading">
          <div className="experience-text">
            <h2 className="oswald-500 mini-heading">EXPERIENCE</h2>
            <h1 className="section-blurb">{heading}</h1>
            <p className="experience-subtext">{subtext}</p>
          </div>
        </div>
        <div className="timeline">
            {experienceData.map((item, index) => (
              <div className="timeline-box" key={index}>
                <div className="timeline-card">
                    <div className="card-shell">
                      <div className="employer">
                      <h2 className="oswald-500 employer-heading">{item.employer.toUpperCase()}</h2>
                      <h2 className="oswald-500 employer-heading">{item.start_date} — {item.end_date}</h2>
                    </div>
                    <h1 className="position">{item.position}</h1>
                    <div className="bullet-points">
                      <ul>
                        {item.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="skills">
                      {item.skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </section>
  )
}

export default Experience
