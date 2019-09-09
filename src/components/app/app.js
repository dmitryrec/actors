import React, { Fragment } from 'react';
import Header from '../header';

const App = ({children}) => {
    return (
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    );
}

export default App;
