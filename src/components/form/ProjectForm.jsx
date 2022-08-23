import { useEffect } from 'react'
import { useState } from 'react'
import Input from './Input'
import Select from './Select'
import SubmitButton from './SubmitButton'

export default function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([])

  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      Headers: {
        'Content-Type:': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => console.log(err))
  }, [])

  const submit = e => {
    e.preventDefault()
    console.log(project)
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <div>
      <form
        onSubmit={submit}
        className="flex flex-col gap-2 max-w-[30%] pt-4"
        action=""
      >
        <Input
          placeholder="insira o nome do projeto"
          type="text"
          name="name"
          text="Nome do projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
        />

        <Input
          type="number"
          placeholder="orçamento do projeto"
          name="budget"
          text="Orçamento:"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ''}
        />

        <Select
          name="categogy_id"
          text="seleciona a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />

        <SubmitButton text={btnText} />
      </form>
    </div>
  )
}
