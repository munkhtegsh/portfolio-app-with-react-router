import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Header from './Header';
import NotFound from './NotFound';
import PortfolioItem from './PortfolioItem';
import Portfolio from './Portfolio';

import { HashRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
    return (
        <HashRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route path="/portfolio" component={Portfolio} exact />
                    <Route path="/portfolio/:id" component={PortfolioItem}  />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </HashRouter>
    )
}

export default Router;