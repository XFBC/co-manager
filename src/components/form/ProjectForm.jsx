export default function ProjectForm() {
  return (
    <div>
      <form className="flex flex-col gap-2 max-w-[30%] pt-4" action="">
        <input type="text" placeholder="insira o nome do projeto" />
        <input type="number" placeholder="insira o orçamento" />
        <select name="category_id" id="">
          <option value=""> selecione a categoria</option>
        </select>

        <button>Enviar projeto</button>
      </form>
    </div>
  )
}
