import './App.css';
import Header from './Componentes/header';
import Formulario from './Componentes/Form';
import Fundo from './Componentes/Fundo';
import Cont from './Componentes/Cont';

function App() {

  return (
    <div className="App">
      <div className='fundo'>
          <img src='luta.jpg' alt='Fundo'></img>
      </div>
      <Header></Header>
      <Formulario></Formulario>
      <Fundo></Fundo>
      <Cont></Cont>
    </div>
  );
}

export default App;
