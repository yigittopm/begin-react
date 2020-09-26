import React from 'react';
import ReactDom from 'react-dom';

// Functional companent
function App(){
    return <h1>This Function App Companent</h1>;
}

class App2 extends React.Component{
    render(){
        return <h1>This Class App Companent</h1>
    }
}

ReactDom.render(
    <App2/>,
    document.getElementById('root') // or document.querySelector('#root')
);
