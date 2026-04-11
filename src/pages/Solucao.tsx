import { useEffect } from 'react'

interface TechItem {
  name: string
  description: string
}

interface RoadmapStep {
  stage: string
  description: string
}

interface UseCase {
  title: string
  description: string
}

const technologies: TechItem[] = [
  {
    name: 'Python',
    description:
      'Responsável pela lógica do sistema e pelo chatbot assistente. Coleta e organiza dados dos pacientes, permite revisão e correção de informações, e gera relatórios completos. Na Sprint 2, foram adicionadas listas para múltiplos cadastros, validações de entrada, cores e organização visual aprimorada.',
  },
  {
    name: 'Java',
    description:
      'Utilizado na modelagem UML para estruturar o sistema e definir fluxos de funcionamento. O diagrama de classes contempla as entidades Usuario, Paciente, Funcionario, Atividade, Financeiro e Menu, garantindo clareza e escalabilidade.',
  },
  {
    name: 'Banco de Dados Relacional',
    description:
      'Organiza e armazena informações de pacientes, dentistas, voluntários, consultas, tratamentos e dados financeiros. Cada paciente possui identificador único. O sistema valida CPF, CRO e campos obrigatórios, garantindo integridade e conformidade com a LGPD.',
  },
  {
    name: 'React + Vite + TypeScript',
    description:
      'Interface front-end moderna, modular e responsiva. Utiliza React Router para navegação SPA, TailwindCSS para estilização e React Hook Form para validação de formulários. A arquitetura de componentes garante reutilização e manutenção facilitada.',
  },
]

const roadmapSteps: RoadmapStep[] = [
  {
    stage: '1ª Etapa — Levantamento de Requisitos',
    description:
      'Identificação dos principais problemas enfrentados pela Turma do Bem: perda de dados, retrabalho e desorganização dos registros clínicos. Definição das funcionalidades essenciais do sistema.',
  },
  {
    stage: '2ª Etapa — Desenvolvimento do Protótipo',
    description:
      'Criação da primeira versão funcional em Python com cadastro básico de pacientes para os programas "Dentistas do Bem" e "Apolônias do Bem", além da estrutura inicial do banco de dados relacional.',
  },
  {
    stage: '3ª Etapa — Implementação do Chatbot',
    description:
      'Desenvolvimento do assistente interativo que orienta o dentista durante o cadastro e o atendimento. O chatbot lembra campos obrigatórios, confirma dados inseridos e permite consulta ao histórico do paciente.',
  },
  {
    stage: '4ª Etapa — Integração e Melhorias (Sprint 2)',
    description:
      'Inclusão de listas para múltiplos cadastros, validações de entrada, menu para listagem de pacientes, reorganização do código e melhorias visuais. Modelagem UML em Java e estruturação do banco de dados completo.',
  },
  {
    stage: '5ª Etapa — Front-End (Sprint 3)',
    description:
      'Migração para React + Vite + TypeScript com TailwindCSS. Implementação de SPA com React Router, componentes reutilizáveis, rotas dinâmicas e formulários validados com React Hook Form.',
  },
  {
    stage: '6ª Etapa — Entrega Final',
    description:
      'Integração completa das linguagens, ajustes finais, documentação acadêmica em formato ABNT e apresentação do produto à FIAP e à ONG Turma do Bem.',
  },
]

const useCases: UseCase[] = [
  {
    title: 'Cadastrar Paciente',
    description:
      'O dentista acessa o sistema, escolhe "Cadastrar paciente" e preenche nome, data de nascimento, e-mail, telefone e endereço. O sistema valida as informações e cria um registro único no banco de dados.',
  },
  {
    title: 'Consultar Prontuário',
    description:
      'O dentista informa o nome, CPF ou ID do paciente. O sistema exibe o prontuário digital completo com histórico de atendimentos e anotações anteriores, permitindo inclusão de novas observações.',
  },
  {
    title: 'Gerar Relatórios',
    description:
      'O coordenador da TDB seleciona o período desejado (mensal, trimestral ou anual) e o sistema gera relatórios estatísticos exportáveis em PDF ou Excel.',
  },
  {
    title: 'Atualizar Informações',
    description:
      'O dentista acessa o prontuário e atualiza endereço, telefone ou histórico clínico. Todas as alterações são registradas com data, hora e identificação do autor. Nenhum registro pode ser excluído permanentemente.',
  },
]

export default function Solucao() {
  useEffect(() => {
    document.title = 'Solução | De Novo Não!'
  }, [])

  return (
    <>
      <section className="text-center py-20 px-6 bg-gray-200">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">
          Solução do Projeto
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Tecnologias utilizadas, roadmap de desenvolvimento e funcionalidades
          do sistema De Novo Não!
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-8 py-14 space-y-16">

        {/* Tecnologias */}
        <section>
          <h2 className="text-[#004857] text-2xl font-bold mb-6 text-center">
            Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-blue-600 font-bold text-lg mb-2">{t.name}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Casos de Uso */}
        <section>
          <h2 className="text-[#004857] text-2xl font-bold mb-6 text-center">
            Funcionalidades do Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-[#004857] font-bold text-base mb-2">📋 {uc.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{uc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chatbot */}
        <section className="bg-gradient-to-r from-[#004857] to-[#57c785] rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4"> Chatbot Assistente Odontológico</h2>
          <p className="leading-relaxed mb-4 text-white/90">
            O chatbot funciona como um guia interativo dentro da plataforma, ajudando o dentista a
            preencher corretamente todos os campos necessários — desde o cadastro inicial até o
            registro completo das consultas e observações clínicas.
          </p>
          <p className="leading-relaxed text-white/90">
            Quando um novo profissional atender um paciente já registrado, poderá acessar rapidamente
            o histórico completo com todas as anotações dos colegas, evitando retrabalhos e garantindo
            a continuidade do tratamento com segurança e precisão.
          </p>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-[#004857] text-2xl font-bold mb-6 text-center">
            Roadmap do Projeto
          </h2>
          <div className="space-y-4">
            {roadmapSteps.map((step, index) => (
              <div key={step.stage} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-[#004857] font-bold text-base">{step.stage}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links externos do relatório */}
        <section className="bg-gray-50 rounded-xl p-8 text-center space-y-4">
          <h2 className="text-[#004857] text-xl font-bold">Materiais do Projeto</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://youtu.be/lhCGLzq2BNI?si=p_L6inbpP96t6lSl"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              🎥 Pitch Sprint 1 — YouTube
            </a>
            <a
              href="https://trello.com/invite/b/68ddc4897bcae36542cb9b4a/ATTIf42b43a5a6290d2060e49be9265cc490A66FF587/de-novo-nao"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              📋 Trello — Logs e Backlogs
            </a>
            <a
              href="https://www.canva.com/design/DAG4Axfrhkc/V-gzqKDMzEQVUtIJONnJQQ/view?utm_content=DAG4Axfrhkc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h462ee3c3a8"
              target="_blank"
              rel="noreferrer"
              className="bg-[#57c785] text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              💼 Modelo de Negócio — Canva
            </a>
          </div>
        </section>

      </div>
    </>
  )
}
