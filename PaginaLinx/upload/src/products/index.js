import React, { Component } from 'react';
import API from '../services/api';


export default class Product extends Component{

    state = {
        product: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await API.get(`/Produtos/${id}`);

        this.setState({ product: response.Nome});
    }

    render() {
        const { product } = this.state;

        return(

            <div className="div-tabela">
            <form id="form-pesquisa">
              <input type="text" id="pesquisa"></input> 
              <button id="pesquisa">Pesquisa</button>
            </form>
            <table border="1">
              <tr>
                <th>Código:</th>
                <th>Nome:</th>
                <th>Valor</th>
              </tr>
              <tr> 
                <td>
                    {product.id}    
                </td>
                <td>
                    {product.Nome}    
                </td> 
                <td>
                    {product.Valor}
                </td>
              </tr>

                </table>
                <div className="roda-pe">
                  <center>
                      <h5 id="pag">Página:</h5>
                  </center>
                 </div>
                </div>
        );
    }
}