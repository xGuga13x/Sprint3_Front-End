import { useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

interface BenefitCard {
  title: string
  description: string
}

const benefits: BenefitCard[] = [
  {
    title: 'Organização',
    description:
      'Centraliza cadastros, prontuários e anotações clínicas em um único sistema digital, eliminando a perda de informações.',
  },
  {
    title: 'Eficiência',
    description:
      'Reduz retrabalho e otimiza o tempo de atendimento. O chatbot orienta o dentista em cada etapa do preenchimento.',
  },
  {
    title: 'Humanização',
    description:
      'Garante continuidade no tratamento do paciente. Qualquer dentista pode acessar o histórico completo e oferecer um cuidado personalizado.',
  },
  {
    title: 'Segurança',
    description:
      'Identificador único por paciente, validação de CPF e CRO, histórico imutável e conformidade com a LGPD.',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Home | De Novo Não!'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gray-200">
        <h1 className="text-blue-600 text-3xl md:text-4xl font-bold mb-5">
          De Novo Não! — Tecnologia e Humanização na Odontologia Social
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Um sistema digital desenvolvido para otimizar o atendimento e a gestão de pacientes
          da <strong>ONG Turma do Bem</strong>, garantindo eficiência, segurança e
          continuidade no cuidado odontológico. Nada mais será feito "de novo".
        </p>
        <Button to="/sobre">Saiba Mais</Button>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6 md:px-10 bg-blue-50 text-center">
        <h2 className="text-[#004857] text-3xl font-bold mb-4">
          Por que o De Novo Não!?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A solução foi criada para adaptar-se à realidade da ONG Turma do Bem,
          oferecendo prontuários digitais, relatórios automáticos e um chatbot assistente.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((b) => (
            <Card key={b.title} title={b.title} description={b.description} />
          ))}
        </div>
      </section>

      {/* Programas atendidos */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-[#004857] text-2xl font-bold mb-8">Programas Atendidos</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#004857] to-[#57c785] text-white rounded-2xl p-8 w-64 shadow-md">
            <h3 className="text-xl font-bold mb-3">🦷 Dentistas do Bem</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Cadastro com dados do paciente e do responsável legal. Voltado ao atendimento de crianças e jovens.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#57c785] to-[#eddd53] text-[#004857] rounded-2xl p-8 w-64 shadow-md">
            <h3 className="text-xl font-bold mb-3">💛 Apolônias do Bem</h3>
            <p className="text-[#004857]/80 text-sm leading-relaxed">
              O próprio paciente preenche as informações. Focado no atendimento de mulheres em situação de vulnerabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Parceria */}
      <section className="py-10 px-6 text-center bg-gray-50">
        <p className="text-[#004857] text-lg max-w-3xl mx-auto">
          Projeto desenvolvido em parceria com a <strong>FIAP</strong> e a ONG{' '}
          <strong>Turma do Bem</strong>, unindo tecnologia e impacto social para
          transformar o atendimento odontológico voluntário no Brasil.
        </p>
      </section>
    </>
  )
}
