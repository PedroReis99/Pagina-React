import React from 'react';
import "./style.css";
import "./css/principal.css";
import "./css/tabela.css";
import "./css/lateral.css";
import Header from './componentes/index';
import Routes from './routes';

function App() {
  return (
    <div className="flex-div">
      <Header />
              
      <div className="div-principal">
                <h6 id="h">Home > Importação de Dados</h6>
                <h2>Listagem de produtos</h2>
                <Routes />
      </div>
    </div>
  );
}

export default App;
