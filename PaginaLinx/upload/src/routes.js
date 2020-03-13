import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main/index';
import Product from './products/index';

const Routes = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/" component={Main}/>
            <Route path="/Produtos/:id" component={Product}/>
        </switch>
    </BrowserRouter>
);

export default Routes;