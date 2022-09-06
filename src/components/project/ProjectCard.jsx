import { Link } from 'react-router-dom'
import { BsPencil, BsTrash } from 'react-icons/bs'
export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove
}) {
  return (
    <div>
      <div className="mt-4 border-gray-700 border-x-2 border-y-2 w-[50%] px-2 py-2">
        <h2 className="text-xl font-normal"> {name}</h2>
        <p>Orçamento: R$ {budget}</p>
        <p> {category}</p>
        <div className="flex flex-row gap-2">
          <div>
            <Link to={`/project/${id}`}>
              {' '}
              <BsPencil /> Editar
            </Link>
          </div>
          <div>
            <button onClick="">
              {' '}
              <BsTrash />
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
