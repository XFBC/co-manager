import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'

export default function Projects() {
  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }
  return (
    <div>
      <h1 className="text-3xl">Projetos criados:</h1>
      {message && <Message type="sucess" msg="Enviado com sucesso" />}
    </div>
  )
}
