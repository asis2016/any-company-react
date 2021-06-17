import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Blog, Dashboard, Home, Login, Project, Service, Single} from "./views";
import {Footer} from "./layouts/Main/components";
import {
    Blog as BlogDashboard,
    Comment as CommentDashboard,
    Gallery as GalleryDashboard,
    GeneralSetting as GeneralSettingDashboard,
    Profile as ProfileDashboard,
    Project as ProjectDashboard,
    Service as ServiceDashboard,
    Testimonial as TestimonialDashboard
} from './views/Dashboard/components';


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

            {/* Dashboard starts here. */}
            <Route path='/login/' component={Login}/>
            <Route path='/dashboard/blog/' component={BlogDashboard}/>
            <Route path='/dashboard/comments/' component={CommentDashboard}/>
            <Route path='/dashboard/galleries/' component={GalleryDashboard}/>
            <Route path='/dashboard/settings/' component={GeneralSettingDashboard}/>
            <Route path='/dashboard/profile/' component={ProfileDashboard}/>
            <Route path='/dashboard/projects/' component={ProjectDashboard}/>
            <Route path='/dashboard/services/' component={ServiceDashboard}/>
            <Route path='/dashboard/testimonials/' component={TestimonialDashboard}/>
            <Route path='/dashboard/' component={Dashboard}/>
        </Switch>
    </Router>
}

export default MainRouter