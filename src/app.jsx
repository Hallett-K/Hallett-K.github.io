import styled from 'styled-components'

import Intro from './sections/intro'
import About from './sections/about'
import ProfessionalProjects from './sections/projects-pro'
import PersonalProjects from './sections/projects-per'
import Contact from './sections/contact'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Intro />
      <About />
      <ProfessionalProjects />
      <PersonalProjects />
      <Contact />
    </Container>
  )
}

export default App