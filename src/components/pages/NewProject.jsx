import ProjectForm from '../form/ProjectForm'

export default function NewProject() {
  return (
    <div>
      <h1 className="text-3xl"> Criar projeto</h1>
      <p className="pt-2"> Crie seu projeto depois adicione os serviços</p>
      <ProjectForm btnText="Criar projeto" />
    </div>
  )
}


