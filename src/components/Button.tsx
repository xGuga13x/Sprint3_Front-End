import { Link } from 'react-router-dom'

interface ButtonProps {
  to: string
  children: React.ReactNode
}

export default function Button({ to, children }: ButtonProps) {
  return (
    <Link
      to={to}
      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg mt-6 hover:bg-blue-800 transition-colors duration-300"
    >
      {children}
    </Link>
  )
}
