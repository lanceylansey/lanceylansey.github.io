import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Clubs from './components/Clubs.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Clubs />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
