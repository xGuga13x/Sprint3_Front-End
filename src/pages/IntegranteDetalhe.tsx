import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { members } from './Integrantes'

export default function IntegranteDetalhe() {
  // useParams: captura o :id da URL (rota dinâmica /integrantes/:id)
  const { id } = useParams<{ id: string }>()

  // useNavigate: permite voltar para a lista
  const navigate = useNavigate()

  // Busca o integrante pelo id vindo da URL
  const member = members.find((m) => m.id === id)

  // useEffect: atualiza o título da aba com o nome do integrante
  useEffect(() => {
    if (member) {
      document.title = `${member.name} | De Novo Não!`
    } else {
      document.title = 'Integrante não encontrado | De Novo Não!'
    }
  }, [member])

  // Se o id não existir, mostra mensagem de erro
  if (!member) {
    return (
      <div className="text-center py-32 px-6">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Integrante não encontrado.
        </h1>
        <button
          onClick={() => navigate('/integrantes')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          ← Voltar para o time
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Hero com gradiente */}
      <section className="bg-gradient-to-r from-[#004857] via-[#57c785] to-[#eddd53] py-16 px-6 text-center text-white">
        <h1 className="text-3xl font-bold mb-2">Perfil do Integrante</h1>
        <p className="text-white/80">Detalhes do membro da equipe</p>
      </section>

      {/* Card de detalhes */}
      <section className="max-w-xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <img
            src={member.photo}
            alt={`Foto de ${member.name}`}
            className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-blue-100 shadow-md"
          />

          <h2 className="text-[#004857] text-2xl font-bold mb-1">
            {member.name}
          </h2>
          <p className="text-blue-500 font-semibold text-base mb-4">
            {member.role}
          </p>

          <div className="bg-gray-50 rounded-xl p-5 text-left space-y-3 mb-6">
            <p className="text-gray-700">
              <span className="font-semibold text-[#004857]">RM:</span>{' '}
              {member.rm}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-[#004857]">Turma:</span>{' '}
              {member.turma}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-[#004857]">Curso:</span>{' '}
              Análise e Desenvolvimento de Sistemas — FIAP
            </p>
          </div>

          {/* Links externos */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>

          {/* Botão voltar — useNavigate */}
          <button
            onClick={() => navigate('/integrantes')}
            className="text-blue-600 hover:underline font-medium"
          >
            ← Voltar para o time
          </button>
        </div>
      </section>
    </>
  )
}
