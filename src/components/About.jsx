import '../style/About.css'

function About() {
    const heading = "Turning ideas into applications that people can use."
    const paragraph = "I’m Brendan Walls, a Computer Science student at James Madison University graduating in Summer 2026. My experience spans software engineering, machine learning, and research, with work in full-stack development, REST APIs, authentication, and data-driven systems. I’ve built and evaluated machine learning models in professional settings, contributed to research using computer vision, and developed projects ranging from recommendation systems to an AI chatbot for incoming students. I’m especially interested in building software that is useful, technically sound, and grounded in real-world problems."
    const facts = [
        {
            heading: "GPA",
            body: "3.47"
        },
        {
            heading: "Graduation",
            body: "Summer 2026"
        },
        {
            heading: "Focus",
            body: "Full-Stack + ML"
        }
    ]
    return (
    <section className="about" id="about">
        <div className="about-container">
            <div className="about-column">
                <div className="section-card">
                    <h2 className="oswald-500 mini-heading">ABOUT</h2>
                    <h1 className="section-blurb">{heading}</h1>
                </div>
            </div>
            <div className="about-column">
                <div className="about-card">
                    <p>{paragraph}</p>
                    <div className="mini-cards">
                        {facts.map((fact, index) => (
                            <div key={index}>
                                <h3>{fact.heading}</h3>
                                <p>{fact.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About