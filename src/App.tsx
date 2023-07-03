import { useState } from 'react';
import './App.css'
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://infoweb-api.vercel.app/',
});

const AppNavBar = (props: any) => {
  const tratarClique = (e: any) => {
    props.carregado(false);
    api.get('/uf')
      .then((resposta: any) => resposta.data.data)
      .then((json) => props.mudar(json));
  };

  return (
    <div className="card">
      <h1>Aplicativo web exemplo</h1>
      <h2>UFS e Elevando estado</h2>
      {
        props.carregando && (<button onClick={tratarClique}>atualizar lista de UF</button>)
      }
    </div>
  );
}

const AppUFLista = (props: any) => {
  const tratarClique = (evento) => {
    console.log(evento.target.innerText);
    const sigla = evento.target.innerText;
    const lista = props.dados.filter( 
      (uf: any) => {
        return uf.sigla == sigla;
      }
    );
    console.log(lista);
    props.mudar(lista[0]);
  };

  return (
    <div className='card'>
        {props.dados.map( 
          (item: any) => 
            <button 
              key={item.sigla} 
              onClick={(e) => props.mudar(item)}>
                {item.sigla}
            </button>
        )}
    </div>
  );
}

const AppUFDetalhe = (props: any) => {
  return (
    <div className='card'>
      <p>{props.dados.sigla}</p>
      <p>{props.dados.nome}</p>
    </div>
  );
}

const App = () => {
  const [uf, setUF] = useState({
    sigla: '', 
    nome: ''
  });
  const [ufs, setUFs] = useState([]);
  const [carregando, setCarregando] = useState(true);

  return (
    <>
      <AppNavBar 
        mudar={setUFs} 
        carregando={carregando} 
        carregado={setCarregando} />
      <AppUFDetalhe dados={uf} />
      <AppUFLista dados={ufs} mudar={setUF}/>
    </>
  )
}

export default App
