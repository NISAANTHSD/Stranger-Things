import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img className="nav-icon" src="/stranger-icon.svg" alt="Stranger Things icon" />
        <span className="nav-title">STRANGER THINGS</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Characters</li>
        <li>Episodes</li>
        <li>Upside Down</li>
      </ul>
    </nav>
  )
}

export default Navbar
