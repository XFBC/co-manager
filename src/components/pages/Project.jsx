import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../layout/Container'

export default function Project() {
  const { id } = useParams()

  const [project, setProject] = useState([])

  const [showProjectForm, setProjectForm] = useState()

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setProject(data)
      })
      .catch(err => console.log)
  }, [id])

  function toggleProjectForm() {
    setProjectForm(!showProjectForm)
  }

  return (
    <>
      {project.name ? (
        <div>
          <p className="text-3xl mb-2">{project.name}</p>
          <Container>
            <div>
              <button
                className="border-yellow-400 border-x-2 border-y-2 px-2 py-2 hover:bg-yellow-300 hover:text-gray-800 mb-2"
                onClick={toggleProjectForm}
              >
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div>
                  <p> Categoria: {project.category.name}</p>
                  <p> Total orçamento: R${project.budget}</p>
                  <span> Total ultilizado: R$ {project.coManager}</span>
                </div>
              ) : (
                <div>detalhes do projeto</div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
