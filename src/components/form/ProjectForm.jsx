import { useEffect } from 'react'
import { useState } from 'react'
import Input from './Input'
import Select from './Select'
import SubmitButton from './SubmitButton'

export default function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([])

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


  return (
    <div>
      <form className="flex flex-col gap-2 max-w-[30%] pt-4" action="">
        <Input
          placeholder="insira o nome do projeto"
          type="text"
          name="name"
          text="Nome do projeto"
        />

        <Input
          type="number"
          placeholder="orçamento do projeto"
          name="budget"
          text="Orçamento:"
        />

        <Select
          name="categogy_id"
          text="seleciona a categoria"
          options={categories}
        />

        <SubmitButton text={btnText} />
      </form>
    </div>
  )
}
