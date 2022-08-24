import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import ProjectCard from '../project/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])

  //puxando projetos cadastrados no BD
  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setProjects(data)
      })
      .catch(err => console.log(err))
  }, [])

  //mesagem de sucesso
  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }
  return (
    <div>
      <h1 className="text-3xl pb-4">Projetos criados:</h1>
      {message && <Message type="sucess" msg="Enviado com sucesso" />}
      <Container>
        <div className="mb-4">
          {projects.length > 0 &&
            projects.map(project => (
              <ProjectCard
                name={project.name}
                budget={project.budget}
                id={project.id}
                category={project.category.name}
                key={project.id}
              />
            ))}
        </div>
        <LinkButton to="/newproject" text="Criar projeto" />
      </Container>
    </div>
  )
}
