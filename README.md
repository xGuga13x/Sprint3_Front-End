# De Novo Não! 

> Sistema desenvolvido para otimizar o atendimento e a gestão de pacientes da ONG **Turma do Bem**, garantindo eficiência, segurança e continuidade no cuidado odontológico.

![Logo De Novo Não](./public/image/DNN!.png)

---

## 🔗 Links do Projeto

| Recurso | Link |
|---------|------|
|  Repositório GitHub | *(https://github.com/xGuga13x/Sprint3_Front-End.git)* |
|  Vídeo de apresentação (YouTube) | https://youtu.be/fLwdr2MUXzY |

---

##  Integrantes do Grupo

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|------|------|----|-------|--------|----------|
| ![Gustavo Jesus](./public/image/G_JESUS.jpeg) | Gustavo de Jesus Silva | 567926 | 1TDSPS | [GitHub](https://github.com/xGuga13x) | [LinkedIn](https://www.linkedin.com/in/gustavo-de-jesus-silva-57716320b/) |
| ![Gustavo Siciliano](./public/image/Siciliano.jpg) | Gustavo Rodrigues Siciliano | 568419 | 1TDSPS | [GitHub](https://github.com/Gxst456) | [LinkedIn](https://www.linkedin.com/in/gustavo-siciliano-78242224a/) |
| ![Samuel Keniti](./public/image/Samuel_Keniti.jpg) | Samuel Keniti Kina de Lima | 567614 | 1TDSPS | [GitHub](https://github.com/swordoffiresof-coder) | [LinkedIn](https://www.linkedin.com/in/samuel-keniti-kina-de-lima-1b7566228/) |

---

##  Descrição do Projeto

O **De Novo Não!** é uma aplicação web SPA (Single Page Application) desenvolvida em React que digitaliza e automatiza o processo de cadastro e registro odontológico da ONG Turma do Bem. O sistema combate a perda de dados e o retrabalho, promovendo um atendimento mais eficiente, seguro e humanizado.

---

##  Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|-----------|
| **React 18** | Interface e Componentização |
| **Vite** | Build e performance |
| **TypeScript** | Tipagem estática no código |
| **TailwindCSS** | Estilização responsiva da interface |
| **React Router DOM** | Navegação SPA com rotas estáticas e dinâmicas |
| **React Hook Form** | Validação de formulários |
| **GitHub** | Versionamento colaborativo |

---

##  Estrutura de Pastas

```
sprint3/
├── public/
│   └── image/                  # Imagens estáticas (logo, fotos dos integrantes)
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Button.tsx          # Botão de navegação
│   │   ├── Card.tsx            # Card de benefícios
│   │   ├── Footer.tsx          # Rodapé global
│   │   ├── Header.tsx          # Cabeçalho com menu responsivo
│   │   └── Layout.tsx          # Wrapper com Header + Footer + Outlet
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Home.tsx            # Página inicial
│   │   ├── Sobre.tsx           # Sobre o projeto
│   │   ├── Integrantes.tsx     # Lista dos integrantes (useNavigate)
│   │   ├── IntegranteDetalhe.tsx # Perfil individual (useParams — rota dinâmica)
│   │   ├── FAQ.tsx             # Perguntas frequentes com acordeão (useState)
│   │   ├── Contato.tsx         # Formulário (React Hook Form)
│   │   └── Solucao.tsx         # Roadmap e tecnologias
│   ├── App.tsx                 # Configuração de rotas (estáticas e dinâmicas)
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais com Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

##  Como Executar Localmente

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/xGuga13x/Sprint3_Front-End.git

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:5173
```

---

##  Páginas da Aplicação

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial com hero e cards de benefícios |
| `/sobre` | Sobre | Descrição do projeto e seus objetivos |
| `/integrantes` | Quem Somos | Lista com animação de entrada dos integrantes |
| `/integrantes/:id` | Perfil do Integrante | Rota dinâmica com detalhes de cada membro |
| `/faq` | FAQ | Perguntas frequentes com acordeão interativo |
| `/contato` | Contato | Formulário validado com React Hook Form |
| `/solucao` | Solução | Tecnologias utilizadas e roadmap do projeto |

---

Projeto desenvolvido em parceria com a **FIAP** e a ONG **Turma do Bem**.
