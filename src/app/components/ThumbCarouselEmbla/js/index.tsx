import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from './Header'
import Footer from './Footer'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
// Criando imagens fictícias para o exemplo
const MOCK_IMAGES = Array.from(Array(SLIDE_COUNT).keys()).map(
  (index) => `/img/produto-${index + 1}.jpg`
)

const App: React.FC = () => (
  <>
    <Header />
    <EmblaCarousel images={MOCK_IMAGES} options={OPTIONS} />
    <Footer />
  </>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
