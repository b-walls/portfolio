import "../style/Contact.css"

function Contact() {
  return (
    <section id="contact">
        <div className="contact-container">
            <div className="contact-card">
                <div className="contact-card-text">
                     <h2 className="oswald-500 mini-heading">CONTACT</h2>
                    <h1 className="section-blurb">Interested in working together?</h1>
                    <p className="projects-subtext">
                        I’m currently looking for opportunities where I can contribute as a software developer, continue growing my skills, and work on meaningful projects. If you’d like to connect about a role, collaboration, or anything I’ve built, feel free to reach out.
                    </p>
                </div>
                <div className="contact-buttons">
                    <a className="contact-link contact-link-primary" href="mailto:brendan.walls22@gmail.com">Email Me</a>
                    <a className="contact-link contact-link-secondary" href="https://linkedin.com/in/brendan-walls" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
