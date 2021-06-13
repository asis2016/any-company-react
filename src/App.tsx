import React from 'react';
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {Blog, Home, Project, Service, Single} from "./views";
import {Footer} from "./layouts/Main/components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppBase} from './App.style';

const App = (): JSX.Element => {
    return (
        <AppBase>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/blog/' component={Blog}/>
                    <Route path='/single/:id/' component={Single}/>
                    <Route path='/service/:id/' component={Service}/>
                    <Route path='/projects/' component={Project}/>
                </Switch>
                <Footer/>
            </Router>
        </AppBase>
    );
}

export default App;
