import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Repository from '../pages/Repository';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/repo/:id" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;