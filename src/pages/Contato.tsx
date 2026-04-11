import { useForm } from 'react-hook-form'
import Card from '../components/Card'

interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  assunto?: string
  mensagem: string
}

const contactCards = [
  { title: 'Presidente', description: 'turmadobem@tdb.org.br' },
  { title: 'Comunicação', description: 'comunicacao@tdb.org.br' },
  { title: 'Fale Conosco', description: 'faleconosco@tdb.org.br' },
  { title: 'Telefone', description: '+55 (11) 5084-7276' },
]

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    localStorage.setItem(
      'ultimoContato',
      JSON.stringify({ ...data, dataEnvio: new Date().toLocaleString() })
    )
    alert('Mensagem enviada com sucesso!')
    reset()
  }

  return (
    <>
      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gray-200">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">
          Entre em Contato com a Turma do Bem
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Envie suas dúvidas, sugestões ou mensagens para nossa equipe. Estamos
          prontos para ouvir você!
        </p>
      </section>

      {/* Formulário */}
      <section className="py-12 px-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-10 rounded-xl shadow-md w-full max-w-2xl mx-auto space-y-5"
          noValidate
        >
          <h2 className="text-[#004857] text-2xl font-bold mb-4">
            Formulário de Contato
          </h2>

          {/* Nome */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Seu nome <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('nome', { required: 'Nome é obrigatório' })}
              className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-blue-500"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Seu e-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido',
                },
              })}
              className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Seu telefone
            </label>
            <input
              type="tel"
              {...register('telefone')}
              className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Assunto */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Assunto
            </label>
            <input
              type="text"
              {...register('assunto')}
              className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              {...register('mensagem', { required: 'Mensagem é obrigatória' })}
              className="w-full border-2 border-gray-300 rounded px-4 py-3 text-base resize-y focus:outline-none focus:border-blue-500"
            />
            {errors.mensagem && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded text-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Info de contato */}
      <section className="py-12 px-10 bg-blue-50 text-center">
        <h2 className="text-[#004857] text-2xl font-bold mb-8">
          Informações de Contato
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {contactCards.map((c) => (
            <Card key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
        <p className="text-[#004857] mt-8 text-base">
          Endereço: Rua Maurício Francisco Klabin, 449 – Vila Mariana, São Paulo
          - SP, 04120-020
        </p>
      </section>
    </>
  )
}
