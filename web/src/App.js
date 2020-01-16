import React, {useState,useEffect} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './Service/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


//Conceitos do React
//Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)
//Propriedade: informações que um componente pai passa para os componentes filhos

function App() {

  const [devs, setDevs] = useState([]);
  
  useEffect(()=> {

    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();

  },[]);

  async function handleAddDev(data){
      const response = await api.post('/devs',data); 
      
      //Adiciona a lista atual e mais o retorno do método
      setDevs([...devs,response.data]);
  }

  return (
    <div id="app">
      <aside>
          <strong> Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
        
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}

        </ul>
      </main>
    </div>

       
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
 
