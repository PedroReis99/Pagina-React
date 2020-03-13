import React, { Component } from "react";
import API from "../../services/api";
//import "./styles.css";
import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import { MagnifyingGlass } from "@styled-icons/foundation/MagnifyingGlass";



const ListIcon3 = styled(MagnifyingGlass)`
width: 25px;
height: 30px;
`


export default class Main extends Component {
    
    state = {
        products: [],
        valor: {},
        page: 1,
    }
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await API.get(`/products?page=${page}`);

        const { docs, ...valor } = response.data;
 
        this.setState({ products: docs, valor, page });
    }
    //Método para voltar para a pagina anterior
    prevPage = () =>{
        const { page, valor } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
        
        this.loadProducts(pageNumber);
    }
    //Método para avançar uma pagina
    nextPage = () =>{
        const { page, valor } = this.state;

        if(page === valor.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render(){
        const { products, page, valor } = this.state;

    return(
         <div className="div-tabela">
         <form id="form-pesquisa">
           <input type="text" id="pesquisa" placeholder="Busca personalizada"></input> 
             <BrowserRouter>
            <Link id="link" to='/'>
                   <ListIcon3 className='lupa' />
                 </Link>
             </BrowserRouter>
         </form>
         <table border="1">
           <tr>
             <th>Código:</th>
             <th>Nome:</th>
             <th>Valor:</th>
           </tr>
           <tr> 
            <td>{products._id}</td> <td>{products.Nome}</td> <td>{products.Valor}</td>
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