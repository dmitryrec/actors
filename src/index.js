import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Actors from './components/actors/actors-list';
import Home from './components/home';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/actors' component={Actors} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
