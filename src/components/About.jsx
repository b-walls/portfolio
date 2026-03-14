import '../style/About.css'

function About() {
  return (
    <section className="about" id="about">
        <div className="about-container">
            <div className="about-column">
                <div className="section-card">
                    <h2 className="oswald-500 mini-heading">ABOUT</h2>
                    <h1 className="section-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>
            </div>
            <div className="about-column">
                <div className="about-card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum lorem sem, et fringilla velit condimentum eu. Sed eget magna ut est fringilla dapibus. Aliquam mattis dui vitae est imperdiet, ut rhoncus metus maximus. Aliquam tempor nunc quis tincidunt pulvinar. Nullam et lorem convallis, egestas sem eget, dignissim sapien. Ut non varius quam, et mattis ex. Nulla suscipit ex eget eros imperdiet, eu feugiat ex tempus.</p>
                    <div className="mini-cards">
                        <div>
                            <h3>3.47</h3>
                            <p>GPA</p>
                        </div>
                        <div>
                            <h3>JMU</h3>
                            <p>Computer Science Major</p>
                        </div>
                        <div>Test</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About