import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function Home({ activeSection }) {
  return (
    <>
      <Navbar activeSection={activeSection} />
      <main className="bg-white text-gray-800 font-sans antialiased overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
