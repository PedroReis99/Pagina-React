import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import { Link, BrowserRouter } from 'react-router-dom';
import { ListAlt } from 'styled-icons/material';
import { CloudUpload } from "@styled-icons/material/CloudUpload";
import { MagnifyingGlass } from "@styled-icons/foundation/MagnifyingGlass";

const ListIcon = styled(ListAlt)`
  width: 25px;
  height: 30px;
  background: #fff;
`
const ListIcon2 = styled(CloudUpload)`
  width: 25px;
  height: 30px;
`
const ListIcon3 = styled(MagnifyingGlass)`
  width: 25px;
  height: 30px;
`

const Header = () => 

    <header id="main-header">
    <div className="flex-div">
        <div className="div-lateral">
          <button id="btnLista">
            <BrowserRouter>
            <Link to='/'>
                <ListIcon className='lista' />
            </Link>
            </BrowserRouter>
          </button>
          <button id="btnUpload">
          <BrowserRouter>
            <Link to='/'>
                <ListIcon2 className='upload' />
            </Link>
            </BrowserRouter>
          </button>
        </div>
        
        </div>
    </header>;

export default Header;