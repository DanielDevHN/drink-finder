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
        <p>Made with ❤ by Daniel Reyes</p>
      </footer>
    </CategoriasProvider>
  )
}

export default App
