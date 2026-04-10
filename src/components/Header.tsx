import { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Quem Somos', to: '/integrantes' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contato', to: '/contato' },
  { label: 'Solução', to: '/solucao' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="bg-gradient-to-r from-[#004857] via-[#57c785] to-[#eddd53] text-white px-6 py-4">
      <nav className="flex items-center justify-between relative max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu}>
          <img
            src="/image/DNN!.png"
            alt="Logo De Novo Não!"
            title="De Novo Não!"
            className="w-16 h-16 object-contain"
          />
        </NavLink>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="flex flex-col justify-between w-7 h-5 md:hidden z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex flex-row gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `font-bold text-base transition-opacity hover:opacity-75 ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Menu mobile */}
        {menuOpen && (
          <ul className="absolute top-full right-0 mt-2 w-48 bg-[#004857]/95 rounded-l-lg shadow-lg flex flex-col items-center py-4 gap-3 list-none z-40 md:hidden">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-bold text-sm text-white hover:text-yellow-300 transition-colors ${
                      isActive ? 'underline' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
