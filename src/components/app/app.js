import React, { Fragment } from 'react';
import Header from '../header';
import './app.css'

const App = ({children}) => {
    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    );
}

export default App;
