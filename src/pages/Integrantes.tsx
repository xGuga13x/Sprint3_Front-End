import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Interface tipada com TypeScript
interface Member {
  id: string
  name: string
  rm: string
  turma: string
  github: string
  linkedin: string
  photo: string
  role: string
}

// Dados dos integrantes
const members: Member[] = [
  {
    id: 'gustavo-jesus',
    name: 'Gustavo de Jesus Silva',
    rm: '567926',
    turma: '1TDSPS',
    github: 'https://github.com/xGuga13x',
    linkedin: 'https://www.linkedin.com/in/gustavo-de-jesus-silva-57716320b/',
    photo: '/image/G_JESUS.jpeg',
    role: 'Desenvolvedor Front-End',
  },
  {
    id: 'gustavo-siciliano',
    name: 'Gustavo Rodrigues Siciliano',
    rm: '568419',
    turma: '1TDSPS',
    github: 'https://github.com/Gxst456',
    linkedin: 'https://www.linkedin.com/in/gustavo-siciliano-78242224a/',
    photo: '/image/Siciliano.jpg',
    role: 'Desenvolvedor Back-End',
  },
  {
    id: 'samuel-keniti',
    name: 'Samuel Keniti Kina de Lima',
    rm: '567614',
    turma: '1TDSPS',
    github: 'https://github.com/swordoffiresof-coder',
    linkedin: 'https://www.linkedin.com/in/samuel-keniti-kina-de-lima-1b7566228/',
    photo: '/image/Samuel_Keniti.jpg',
    role: 'Desenvolvedor Full-Stack',
  },
]

export { members }
export type { Member }

export default function Integrantes() {
  // useState: controla quantos cards já apareceram (animação de entrada)
  const [visibleCount, setVisibleCount] = useState<number>(0)

  // useNavigate: redireciona para rota dinâmica /integrantes/:id
  const navigate = useNavigate()

  // useEffect: atualiza título da aba + anima entrada dos cards
  useEffect(() => {
    document.title = 'Quem Somos | De Novo Não!'

    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= members.length) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 200)

    return () => clearInterval(timer)
  }, [])

  const handleCardClick = (id: string) => {
    navigate(`/integrantes/${id}`)
  }

  return (
    <>
      <section className="text-center py-20 px-6 bg-gray-200">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">Nosso Time</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Conheça os integrantes do projeto <strong>De Novo Não!</strong>,
          responsáveis por unir tecnologia e propósito social. Clique em um
          card para ver mais detalhes.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-14 px-10 py-16">
        {members.map((m, index) => (
          <div
            key={m.rm}
            onClick={() => handleCardClick(m.id)}
            className={`bg-white p-6 rounded-xl w-72 text-center shadow-md cursor-pointer
              hover:-translate-y-2 hover:shadow-xl transition-all duration-500
              ${index < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <img
              src={m.photo}
              alt={`Foto de ${m.name}`}
              className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
            />
            <h2 className="text-[#004857] font-bold text-lg mb-1">{m.name}</h2>
            <p className="text-blue-500 text-sm font-medium mb-1">{m.role}</p>
            <p className="text-gray-500 text-sm mb-4">
              RM: {m.rm} | Turma: {m.turma}
            </p>
            <span className="inline-block bg-blue-600 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-800 transition-colors">
              Ver perfil →
            </span>
          </div>
        ))}
      </section>

      <section className="py-8 px-6 text-center">
        <p className="text-[#004857] text-lg">
          Projeto desenvolvido em parceria entre a FIAP e a ONG Turma do Bem,
          promovendo transformação social através da tecnologia.
        </p>
      </section>
    </>
  )
}
