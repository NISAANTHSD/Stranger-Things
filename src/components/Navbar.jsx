import React from 'react'
import './Navbar.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'characters', label: 'Characters' },
  { id: 'episodes', label: 'Episodes' },
  { id: 'upside-down', label: 'Upside Down' },
]

const Navbar = ({ activeSection, onNavigate }) => {
  const handleNavigate = (id) => {
    if (onNavigate) {
      onNavigate(id)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img className="nav-icon" src="/stranger-icon.svg" alt="Stranger Things icon" />
        <span className="nav-title">STRANGER THINGS</span>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
