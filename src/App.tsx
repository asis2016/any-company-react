import React from 'react';
import './App.css';
import {AppBase} from "./App.style";
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {Home} from "./views";
import {Footer} from "./layouts/Main/components";

const App = (): JSX.Element => {
    return <AppBase>
        <Home/>
        <Footer/>
    </AppBase>
}

export default App;
