import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Blog, Home, Login, Project, Service, Single} from "./views";
import {Footer} from "./layouts/Main/components";



const MainRouter = () => {
    return <Router>
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
            <Route path='/login/' component={Login}/>            
        </Switch>
    </Router>
}

export default MainRouter