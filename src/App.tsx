import React from 'react';
import './App.css';
import {AppBase} from "./App.style";
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {Home, Single, Service} from "./views";
import {Footer} from "./layouts/Main/components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HeaderBlue} from './views/Home/components';

const App = (): JSX.Element => {
    return (
        <AppBase>
            <Router>

                <HeaderBlue/>
                {/*  */}
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
