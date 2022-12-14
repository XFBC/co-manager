import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'

export default function Navbar() {
  return (
    <div className="bg-slate-700 flex flex-row gap-4 text-white ">
      <Link to="/">
        <img src={logo} alt="" width={60} />
      </Link>
      <nav className="pt-4 flex flex-row gap-5 ">
        <Link to="/" className=" hover:text-yellow-300 font-normal">
          Home
        </Link>
        <Link to="/projects" className=" hover:text-yellow-300 font-normal">
          Projetos
        </Link>
        <Link to="/company" className=" hover:text-yellow-300 font-normal">
          Empresa
        </Link>
        <Link to="/contact" className=" hover:text-yellow-300 font-normal">
          Contato
        </Link>
      </nav>
    </div>
  )
}
