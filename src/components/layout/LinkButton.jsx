import { Link } from 'react-router-dom'

export default function LinkButton({ to, text }) {
  return (
    <div>
      <Link
        className="border-yellow-400 border-x-2 border-y-2 px-2 py-2 hover:bg-yellow-300 hover:text-gray-800"
        to={to}
      >
        {text}
      </Link>
    </div>
  )
}
