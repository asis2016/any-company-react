import React from 'react';
import './assets/css/bootstrap.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/ionicons.min.css'
import {AppBase} from './App.style';
import MainRouter from './MainRouter';

const App = (): JSX.Element => {
    return (
        <AppBase>
            <MainRouter/>
        </AppBase>
    );
}

export default App;
