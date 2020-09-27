import React from 'react';
import ReactDom from 'react-dom';

import Card from './components/Card';

const App = () => {
    return (
        <div>
            <div className="card-group">

                <Card cardTitle="Macbook"/>
                <Card cardTitle="Asus"/>
                <Card cardTitle="Monster"/>
            
            </div>

        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root') // or document.querySelector('#root')
);
