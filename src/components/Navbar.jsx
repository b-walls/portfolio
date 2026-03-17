import { useState, useEffect } from 'react'

// icons
import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

import '../style/Navbar.css'

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    
    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
        setNavOpen(false)
    }

    const handleSectionLinkClick = (event, sectionId) => {
        event.preventDefault()
        scrollToSection(sectionId)
    }

    // close after a resize and column nav was opened
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 767px)")

        const handleViewportChange = (event) => {
            if (event.matches) {
                setNavOpen(false)
            }
        }

        handleViewportChange(mediaQuery)
        mediaQuery.addEventListener("change", handleViewportChange)

        return () => {
            mediaQuery.removeEventListener("change", handleViewportChange)
        }
    }, [])

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-pill">
                    <div className="left-box">
                        <a href="#hero" className='oswald-500' onClick={(event) => handleSectionLinkClick(event, "hero")}>BW</a>
                    </div>
                    <div className="center-box">
                        <a className="nav-link oswald-400" href="#about" onClick={(event) => handleSectionLinkClick(event, "about")}>About</a>
                        <a className="nav-link oswald-400" href="#experience" onClick={(event) => handleSectionLinkClick(event, "experience")}>Experience</a>
                        <a className="nav-link oswald-400" href="#projects" onClick={(event) => handleSectionLinkClick(event, "projects")}>Projects</a>
                        <a className="nav-link oswald-400" href="#skills" onClick={(event) => handleSectionLinkClick(event, "skills")}>Skills</a>
                        <a className="nav-link oswald-400" href="#contact" onClick={(event) => handleSectionLinkClick(event, "contact")}>Contact</a>
                    </div>
                    <div className="right-box">
                        <a className="icon-link" id="github-icon" href="https://github.com/b-walls" target="_blank"><LuGithub/></a>
                        <a className="icon-link" id="linkedin-icon" href="https://linkedin.com/in/brendan-walls" target="_blank"><FaLinkedin/></a>
                        <button className="toggler" id="hamburger-toggler" onClick={toggleNav}>
                            <RxHamburgerMenu/>
                        </button>
                    </div>
                </div>
                <div className={`nav-small ${navOpen ? 'is-visible' : ''}`} id="col-nav">
                    <a className="nav-link oswald-400" href="#about" onClick={(event) => handleSectionLinkClick(event, "about")}>About <MdArrowOutward /></a>
                    <a className="nav-link oswald-400" href="#experience" onClick={(event) => handleSectionLinkClick(event, "experience")}>Experience <MdArrowOutward /></a>
                    <a className="nav-link oswald-400" href="#projects" onClick={(event) => handleSectionLinkClick(event, "projects")}>Projects <MdArrowOutward /></a>
                    <a className="nav-link oswald-400" href="#skills" onClick={(event) => handleSectionLinkClick(event, "skills")}>Skills <MdArrowOutward /></a>
                    <a className="nav-link oswald-400" href="#contact" onClick={(event) => handleSectionLinkClick(event, "contact")}>Contact <MdArrowOutward /></a>
                    <hr className="nav-small-divider"/>
                    <a className="icon-link-small" id="github-icon-small" href="https://github.com/b-walls" target="_blank"><LuGithub/> <MdArrowOutward /></a>
                    <a className="icon-link-small" id="linkedin-icon-small" href="https://linkedin.com/in/brendan-walls" target="_blank"><FaLinkedin/> <MdArrowOutward /></a>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
