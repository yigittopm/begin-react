import React from 'react';
import ReactDom from 'react-dom';

// Functional companent
// JSX 

const names = ["Mert", "Buket", "Anıl"];

function App(){
    return (
        // Everything is in "div"
        <div>
            <button type="button">JSX BUTTON</button>
        </div>
    );  
}

ReactDom.render(
    <App/>,
    document.getElementById('root') // or document.querySelector('#root')
);
