import { useState, useEffect } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'O que é o projeto "De Novo Não!"?',
    answer:
      'É um sistema digital criado para otimizar o registro e o armazenamento das informações dos pacientes atendidos pela Turma do Bem (TDB). Ele combate a perda de dados e o retrabalho, promovendo um atendimento mais eficiente, seguro e humanizado. O nome reflete o objetivo central: nunca mais perder informações ou repetir dados desnecessariamente.',
  },
  {
    id: 2,
    question: 'Qual problema o sistema resolve?',
    answer:
      'A perda de informações em consultórios odontológicos é comum e afeta o acompanhamento do histórico do paciente, além de gerar retrabalho. A TDB enfrenta dificuldades similares, onde a desorganização compromete a continuidade do atendimento e a confiança dos pacientes. O "De Novo Não!" resolve isso com cadastro simples, prontuário digital único e acesso rápido e seguro aos dados.',
  },
  {
    id: 3,
    question: 'Quem pode utilizar o sistema?',
    answer:
      'O sistema foi desenvolvido para dentistas voluntários e coordenadores da ONG Turma do Bem. Os dentistas podem cadastrar pacientes, consultar prontuários e registrar atendimentos. Os coordenadores têm acesso à geração de relatórios estatísticos mensais, trimestrais ou anuais.',
  },
  {
    id: 4,
    question: 'Quais são os dois tipos de atendimento suportados?',
    answer:
      'O sistema suporta dois programas da TDB: "Dentistas do Bem", onde são coletados dados do paciente e do responsável legal, e "Apolônias do Bem", onde o próprio paciente preenche as informações. As perguntas são adaptadas automaticamente conforme a opção escolhida.',
  },
  {
    id: 5,
    question: 'O que faz o Chatbot Assistente Odontológico?',
    answer:
      'O chatbot funciona como um guia interativo dentro da plataforma, ajudando o dentista a preencher corretamente todos os campos — desde o cadastro inicial até o registro completo das consultas. Ele lembra campos importantes como tipo de procedimento, materiais utilizados e observações clínicas, e permite que novos dentistas acessem rapidamente o histórico completo de pacientes já atendidos.',
  },
  {
    id: 6,
    question: 'Como o sistema garante a segurança e confiabilidade dos dados?',
    answer:
      'Cada paciente possui um identificador único, com validação de CPF, CRO e campos obrigatórios. O histórico clínico é atualizado continuamente e nenhum registro pode ser excluído permanentemente — apenas atualizado — garantindo rastreabilidade completa. Todas as alterações são registradas com data, hora e identificação do autor, em conformidade com a LGPD.',
  },
  {
    id: 7,
    question: 'Quais funcionalidades o sistema oferece?',
    answer:
      'O sistema permite: cadastro unificado de pacientes, consulta de prontuários eletrônicos, registro de atendimentos com materiais e observações clínicas, atualização de informações, geração de relatórios estatísticos exportáveis em PDF ou Excel, e um chatbot assistente para orientar os dentistas durante o uso.',
  },
  {
    id: 8,
    question: 'Quais tecnologias foram utilizadas no desenvolvimento?',
    answer:
      'O projeto utiliza Python para a lógica do sistema e do chatbot assistente, Java para a modelagem UML e estrutura de classes, banco de dados relacional para armazenamento seguro das informações, e React + Vite + TypeScript com TailwindCSS para o front-end moderno e responsivo.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'FAQ | De Novo Não!'
  }, [])

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <section className="text-center py-20 px-6 bg-gray-200">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">
          Perguntas Frequentes
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Confira as dúvidas mais comuns sobre o projeto De Novo Não! e entenda
          como ele transforma o atendimento odontológico da Turma do Bem.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14 space-y-3">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-blue-50 transition-colors text-left"
            >
              <span className="text-[#004857] font-bold text-base">
                {item.question}
              </span>
              <span className="text-blue-600 text-xl font-bold ml-4 shrink-0">
                {openId === item.id ? '−' : '+'}
              </span>
            </button>

            {openId === item.id && (
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="pb-10 px-6 text-center">
        <p className="text-[#004857] text-base">
          O projeto "De Novo Não!" é fruto da parceria entre a{' '}
          <strong>FIAP</strong> e a <strong>Turma do Bem</strong>, unindo
          tecnologia e impacto social em favor da odontologia humanizada.
        </p>
      </section>
    </>
  )
}
