import { useState, useEffect } from 'react'
import { LuMoon, LuSun, LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";


import './style/Navbar.css'

function Navbar() {
    const [darkMode, setDarkMode] = useState(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )

    const toggleTheme = () => {
        const theme = darkMode ? "dark" : "light";
        setDarkMode(!darkMode);
        
        console.log(theme);
        document.documentElement.setAttribute("data-theme", theme);
    }

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light"
        )
    }, [darkMode])

    return (
        <nav>
            <div className="links">
                <div className="left-box">
                    <button className="theme-toggler" onClick={toggleTheme}>
                        {darkMode ? <LuMoon/> : <LuSun/> }
                    </button>
                </div>
                <div className="center-box">
                    <a href="/">About</a>
                    <a href="/">Experience</a>
                    <a href="/">Projects</a>
                </div>
                <div className="right-box">
                    <a className="icon-link" href="https://github.com/b-walls" target="_blank"><LuGithub/></a>
                    <a className="icon-link" href="https://linkedin.com/in/brendan-walls" target="_blank"><FaLinkedin/></a>
                </div>
            </div>
        </nav>
  )
}

export default Navbar