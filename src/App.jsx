
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Episodes from './components/Episodes'

const allowedSections = ['home', 'characters', 'episodes', 'upside-down']

const getInitialSection = () => {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const hashSection = window.location.hash.replace('#', '')
  if (allowedSections.includes(hashSection)) {
    return hashSection
  }

  const storedSection = window.localStorage.getItem('st-active-section')
  return allowedSections.includes(storedSection) ? storedSection : 'home'
}

function App() {
  const [activeSection, setActiveSection] = useState(getInitialSection)

  const handleNavigate = (section) => {
    const nextSection = allowedSections.includes(section) ? section : 'home'
    setActiveSection(nextSection)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('st-active-section', activeSection)
    window.history.replaceState(null, '', `#${activeSection}`)
  }, [activeSection])

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      {activeSection === 'home' && <Hero />}
      {activeSection === 'characters' && <Characters />}
      {activeSection === 'episodes' && <Episodes />}
      {activeSection === 'upside-down' && <Hero />}
    </>
  )
}

export default App
