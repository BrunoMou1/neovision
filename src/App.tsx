import { Contato } from './components/contato'
import { Descrition } from './components/description'
import { Footer } from './components/footer'
import { Funcionalities } from './components/functionalities'
import { Header } from './components/header'

function App() {
  return (
    <>
      <Header />
      <Descrition />
      <Funcionalities />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
