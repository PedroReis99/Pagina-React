import React from 'react';
import "./css/style.css";


function Corpo() {
    return (
      <div className="div-lateral">
          <button id="btnUpload">
            <img src="../Imagens/upload.png" />
          </button>
          <button id="btnLista">
            <img src="./Imagens/lista.png"/>
          </button>
      </div>
    );
  }

  export default Corpo;