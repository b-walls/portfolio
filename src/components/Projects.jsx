import { MdArrowOutward } from "react-icons/md";

import '../style/Projects.css'

function Projects() { 
  const projects = [
    {
      name: "Film Finder",
      url: "https://film-finder-1123.onrender.com/",
      imgPath: "film-finder.png",
      description: "A movie recommendation application that uses data from TMDB (The Movie Database) to generate similarity-based recommendations. A K-Nearest Neighbors model was trained on features such as genre, production details, ratings, and other metadata to identify related films. The recommendation engine is deployed with FastAPI and served through a React frontend, allowing users to search for a movie and receive tailored recommendations through an interactive web interface.",
      skills: ["React", "Machine learning", "FastAPI", "Full-Stack"],
    },
    {
      name: "Freshman AI",
      github: "https://github.com/b-walls/freshman-ai",
      imgPath: "duke-dog-ai.png",
      description: "An AI-powered chatbot to support incoming James Madison University freshmen by providing answers to questions related to academics, campus resources, student life, and the transition to college. The application was designed to deliver fast, conversational guidance and improve access to information for new students",
      skills: ["LangChain", "AI Assistant", "RAG", "FastAPI", ],
    }
  ]
  return (
    <section id="projects">
        <div className="projects-container">
            <div className="projects-header">
                <h2 className="oswald-500 mini-heading">PROJECTS</h2>
                <h1 className="section-blurb">Real projects, real problem solving.</h1>
            </div>
            <div className="project-cards">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <img className="project-img" src={project.imgPath} alt={`Example image of my project ${project.name}`} />
                  <h2 className="project-name">{project.name}</h2>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span className="project-skill" key={index}>{skill}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    {project.url ? <a href={project.url} className="primary">View App<MdArrowOutward/></a> : <a href={project.github} className="primary">View Code<MdArrowOutward/></a>}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Projects
