import ProjectForm from '../form/ProjectForm'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NewProject() {
  const Navigate = useNavigate()

  function createPost(project) {
    //inicio

    project.coManager = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      // faz um post para projects
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)

        //redirect
        Navigate('/projects', {
          state: { message: 'projeto criado com sucesso' }
        })
      })
  }

  return (
    <div>
      <h1 className="text-3xl"> Criar projeto</h1>
      <p className="pt-2"> Crie seu projeto depois adicione os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  )
}
