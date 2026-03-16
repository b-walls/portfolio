import { MdArrowOutward, MdCode, MdRocketLaunch } from "react-icons/md";
import { LuBadgeCheck, LuSparkles } from "react-icons/lu";

import '../style/Projects.css'

function Projects() { 
  const projects = [
    {
      name: "Film Finder",
      category: "Machine Learning + Full-Stack",
      status: "Live",
      url: "https://film-finder-1123.onrender.com/",
      imgPath: "film-finder.png",
      description: "A movie recommendation application that uses TMDB data to generate similarity-based suggestions through an interactive search experience.",
      summary: "A K-Nearest Neighbors model was trained on genre, production details, ratings, and other metadata to surface related films, then deployed with FastAPI behind a React frontend.",
      highlights: [
        "Built a recommendation pipeline around content and metadata similarity.",
        "Served model predictions through a FastAPI backend for responsive search.",
        "Designed a React interface that helps users quickly discover new movies."
      ],
      metrics: [
        { label: "Model", value: "KNN" },
        { label: "Dataset", value: "TMDB" },
        { label: "Stack", value: "React + FastAPI" }
      ],
      skills: ["React", "Machine learning", "FastAPI", "Full-Stack"],
      primaryLabel: "View App"
    },
    {
      name: "Freshman AI",
      category: "AI Assistant + RAG",
      status: "POC",
      github: "https://github.com/b-walls/freshman-ai",
      imgPath: "duke-dog-ai.png",
      description: "An AI-powered chatbot built to help incoming James Madison University freshmen get clear, conversational answers during their transition to campus life.",
      summary: "The assistant supports questions about academics, campus resources, student life, and onboarding, with a focus on making university information easier to access for new students.",
      highlights: [
        "Created a student-facing assistant designed around common freshman questions.",
        "Used retrieval-augmented generation to ground responses in relevant information.",
        "Focused the experience on fast, approachable guidance rather than static FAQs."
      ],
      metrics: [
        { label: "Audience", value: "JMU Freshmen" },
        { label: "Approach", value: "RAG" },
        { label: "Use Case", value: "Student Support" }
      ],
      skills: ["LangChain", "AI Assistant", "RAG", "FastAPI"],
      primaryLabel: "View Code"
    },
  ]
  return (
    <section id="projects">
        <div className="projects-container">
            <div className="projects-header">
                <h2 className="oswald-500 mini-heading">PROJECTS</h2>
                <h1 className="section-blurb">Real projects, real problem solving.</h1>
                <p className="projects-subtext">
                  Work that reflects my interests in software and AI.
                </p>
            </div>
            <div className="project-cards">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-card-top">
                    <span className="project-category oswald-400">{project.category}</span>
                    <span className="project-status">
                      <LuBadgeCheck />
                      {project.status}
                    </span>
                  </div>
                  <div className="project-image-wrap">
                    <img className="project-img" src={project.imgPath} alt={`Example image of my project ${project.name}`} />
                    <div className="project-image-overlay">
                      <span><MdRocketLaunch /> Built End-to-End</span>
                      <span><LuSparkles /> User-Focused Experience</span>
                    </div>
                  </div>
                  <div className="project-copy">
                    <h2 className="project-name">{project.name}</h2>
                    <p className="project-desc">{project.description}</p>
                    <p className="project-summary">{project.summary}</p>
                  </div>
                  <div className="project-metrics">
                    {project.metrics.map((metric, metricIndex) => (
                      <div className="project-metric" key={metricIndex}>
                        <span className="project-metric-label oswald-400">{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="project-highlights">
                    <h3 className="project-section-title oswald-500">Highlights</h3>
                    <ul>
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span className="project-skill" key={index}>{skill}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    {project.url ? (
                      <a href={project.url} className="project-link project-link-primary" target="_blank" rel="noreferrer">
                        {project.primaryLabel}
                        <MdArrowOutward />
                      </a>
                    ) : (
                      <></>
                    )}
                    {project.github ? (
                      <a href={project.github} className="project-link project-link-primary" target="_blank" rel="noreferrer">
                        View Code
                        <MdCode />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Projects
