import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Sobre() {
  useEffect(() => {
    document.title = 'Sobre | De Novo Não!'
  }, [])

  return (
    <>
      <section className="text-center py-20 px-6 bg-gray-200">
        <h1 className="text-blue-600 text-4xl font-bold mb-4">Sobre o Projeto</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Uma solução tecnológica e social desenvolvida para transformar o atendimento odontológico da ONG Turma do Bem.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-14 space-y-10">

        <div>
          <h2 className="text-[#004857] text-2xl font-bold mb-3">Introdução</h2>
          <p className="text-gray-700 leading-relaxed">
            Os dentistas lidam com muitos dados dos pacientes, como históricos e exames, e a perda de
            informações pode resultar em erros de tratamento, retrabalho e perda de confiança. A{' '}
            <strong>Turma do Bem (TDB)</strong> enfrenta esse problema ao atender crianças e mulheres
            em situação de vulnerabilidade, com dificuldades na gestão de dados, o que compromete o
            atendimento e a continuidade do cuidado. O sistema <strong>"De Novo Não!"</strong> foi
            desenvolvido para solucionar essa questão.
          </p>
        </div>

        <div>
          <h2 className="text-[#004857] text-2xl font-bold mb-3">Descrição do Problema</h2>
          <p className="text-gray-700 leading-relaxed">
            A perda de informações em consultórios odontológicos é comum e afeta o acompanhamento
            do histórico do paciente, além de gerar retrabalho. A TDB enfrenta dificuldades similares,
            onde a desorganização compromete a continuidade do atendimento e a confiança dos pacientes.
            Como aponta a odontologista Isabela Castro em artigo publicado pelo IBSP:
          </p>
          <blockquote className="border-l-4 border-blue-400 pl-5 my-4 italic text-gray-600">
            "A criação de modelos padrão, checklists e instrumentos confiáveis servem de barreira contra
            o erro e também geram dados, que poderão ser avaliados para construir ciclos de melhoria
            contínua." — CASTRO, 2016
          </blockquote>
        </div>

        <div>
          <h2 className="text-[#004857] text-2xl font-bold mb-3">Justificativa</h2>
          <p className="text-gray-700 leading-relaxed">
            A implementação do projeto justifica-se pela necessidade de modernizar a gestão de
            informações da ONG TDB, que atualmente enfrenta dificuldades no controle e na continuidade
            dos registros. A ausência de um sistema integrado gera perda de dados, retrabalho e limita
            a eficiência dos atendimentos. Com a digitalização dos processos, a organização poderá
            centralizar cadastros, prontuários e anotações clínicas, reduzindo falhas humanas e
            facilitando o acesso às informações. Além disso, o uso de relatórios automatizados melhora
            a transparência e a prestação de contas, fortalecendo a credibilidade da instituição.
          </p>
        </div>

        <div>
          <h2 className="text-[#004857] text-2xl font-bold mb-3">Objetivo do Projeto</h2>
          <p className="text-gray-700 leading-relaxed">
            O objetivo do projeto <strong>"De Novo Não!"</strong> é desenvolver um sistema digital para
            gestão dos atendimentos da ONG TDB, permitindo o <strong>cadastro unificado de pacientes</strong>,{' '}
            <strong>prontuários eletrônicos</strong> e <strong>registros clínicos</strong>. A plataforma
            busca integrar e organizar informações de forma segura, garantindo acesso rápido e atualização
            constante dos dados. O sistema possibilita o acompanhamento de históricos, geração de
            relatórios e controle de campanhas, otimizando o gerenciamento das atividades.
          </p>
        </div>

        <div>
          <h2 className="text-[#004857] text-2xl font-bold mb-3">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed">
            O projeto <strong>"De Novo Não!"</strong> representa muito mais do que um simples sistema
            de gestão odontológica — ele é uma solução social e tecnológica voltada para transformar
            o modo como a Turma do Bem realiza seus atendimentos. Ao eliminar a perda de informações
            e a necessidade de repetição de dados, o sistema traz eficiência, agilidade e humanização
            ao processo. A tecnologia une empatia e inovação, mostrando que é possível usar a informação
            de forma inteligente para ampliar o impacto social.
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          Para conhecer as tecnologias utilizadas e o roadmap do projeto, visite a{' '}
          <Link to="/solucao" className="text-blue-600 hover:underline">
            página Solução do Projeto
          </Link>
          .
        </p>

      </section>
    </>
  )
}
