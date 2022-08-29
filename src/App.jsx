import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriasProvider'

function App() {

  return (
    <CategoriasProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className="mt-5">
        <Formulario />
      </Container>

      <footer className="mt-5">
        <div>Made with ❤ by Daniel Reyes</div>
      </footer>
    </CategoriasProvider>
  )
}

export default App
