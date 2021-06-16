import React from 'react';
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {AppBase} from './App.style';
import {Blog, Dashboard, Home, Login, Project, Service, Single} from "./views";
import {Footer} from "./layouts/Main/components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Gallery, Profile} from './views/Dashboard/components';

const App = (): JSX.Element => {
    return (
        <AppBase>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                        <Footer/>
                    </Route>
                    <Route path='/blog/'>
                        <Blog/>
                        <Footer/>
                    </Route>
                    <Route path='/single/:id/'>
                        <Single/>
                        <Footer/>
                    </Route>
                    <Route path='/service/:id/'>
                        <Service/>
                        <Footer/>
                    </Route>
                    <Route path='/projects/'>
                        <Project/>
                        <Footer/>
                    </Route>

                    {/* Dashboard starts here. */}
                    <Route path='/login/'>
                        <Login/>
                    </Route>
                    <Route path='/dashboard/galleries/'>
                        <Gallery/>
                    </Route>
                    <Route path='/dashboard/profile/'>
                        <Profile/>
                    </Route>
                    <Route path='/dashboard/'>
                        <Dashboard/>
                    </Route>
                </Switch>
            </Router>
        </AppBase>
    );
}

export default App;
