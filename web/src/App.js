import React, {useState} from 'react';
import Header from './Header';

//Conceitos do React
//Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
//Propriedade: informações que um componente pai passa para os componentes filhos

function App() {
  return (
        <>      
          <Header/>      
      </>
    );  
}

export default App;


//*************************************************************************************************** 
//Usando o conceito de componente - criando um componente chamado Header
// function App() {
//   return (
//         <>      
//           <Header/>      
//       </>
//     );  
// }
 
//*************************************************************************************************** 
//Usando o conceito de propriedade - passando a propriedade 'title' que é lida dentro do componente
//Dentro do componente acessa-se a propriedade da seguinte forma: { props.title} - props pasado na função
// function App() {

//   return (
//     <>      
//       <Header title="Dashboard Automático"/>
//       <Header title="Dashboard Manual"/>
//       <Header title="Dashboard Provisório"/>
//   </>
// );
// }

//*************************************************************************************************** 
//Usando o conceito de estado
// function App() {
//   //cria uma constante array que desestrutura (de array para variáveis) a informação do userState
//   const [counter,setCounter] = useState(0);

//   function incrementCounter() {
//     //O React sempre cria um novo objeto (imutabilidade)
//     setCounter(counter+1);
//   }

//   return (
//     <>      
//       {/* <Header title="Dashboard Automático"/>
//       <Header title="Dashboard Manual"/>
//       <Header title="Dashboard Provisório"/> */
//     }
//     <h1> Contador: {counter}</h1>
//     <button onClick={incrementCounter}>Incrementar</button>
//   </>
// );
// }
 
