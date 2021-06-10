import React from 'react';
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {Home, Service, Single} from "./views";
import {Footer} from "./layouts/Main/components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppBase} from './App.style';

const App = (): JSX.Element => {
    return (
        <AppBase>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/single/:id' component={Single}/>
                    <Route path='/service/:id' component={Service}/>
                </Switch>
                <Footer/>
            </Router>
        </AppBase>
    );
}

export default App;
