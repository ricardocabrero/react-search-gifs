import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from '../../pages/main';
import Detail from '../../pages/detail';

const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/detail/:param' component={Detail}/>
            </Switch>
        </Router>
    )
}

export default RouterApp;