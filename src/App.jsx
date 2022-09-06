import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Company from './components/pages/Company'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/newproject" element={<NewProject />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
