import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Integrantes from './pages/Integrantes'
import IntegranteDetalhe from './pages/IntegranteDetalhe'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import Solucao from './pages/Solucao'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="integrantes" element={<Integrantes />} />
          {/* Rota dinâmica — useParams em IntegranteDetalhe */}
          <Route path="integrantes/:id" element={<IntegranteDetalhe />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contato" element={<Contato />} />
          <Route path="solucao" element={<Solucao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
