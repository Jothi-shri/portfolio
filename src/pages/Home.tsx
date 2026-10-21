import { Hero } from '../sections/Hero.tsx'
import { About } from '../sections/About.tsx'
import { Contact } from '../sections/Contact.tsx'
import { Experience } from '../sections/Experience.tsx'
import { Projects } from '../sections/Projects.tsx'
import { Skills } from '../sections/Skills.tsx'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
