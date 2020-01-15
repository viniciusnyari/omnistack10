import React, {useState} from 'react';
import Header from './Header';

//Conceitos do React
//Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
//Propriedade: informações que um componente pai passa para os componentes filhos

function App() {

  //cria uma constante array que desestrutura (de array para variáveis) a informação do userState
  const [counter,setCounter] = useState(0);

  function incrementCounter() {
    //O React sempre cria um novo objeto (imutabilidade)
    setCounter(counter+1);
  }

  return (
    <>      
      {/* <Header title="Dashboard Automático"/>
      <Header title="Dashboard Manual"/>
      <Header title="Dashboard Provisório"/> */
      }
      <h1> Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
