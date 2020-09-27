import React from 'react';
import ReactDom from 'react-dom';

import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
    return (
        <div>
            <div className="card-group">

                <Collapse href="collapseExample1">
                    <Card cardTitle="Macbook"
                    cardText="8GB Ram 256GB SSD"
                    updatedTime="1 min ago updated"
                    image="https://picsum.photos/id/1/200/300" />
                </Collapse>

                <Collapse href="collapseExample2">
                    <Card cardTitle="Asus"
                    cardText="16GB Ram 256GB SSD"
                    updatedTime="10 min ago updated"
                    image="https://picsum.photos/id/10/200/300" />
                </Collapse>

                <Collapse href="collapseExample3"> 
                    <Card cardTitle="Monster"
                    cardText="8GB Ram 512GB SSD"
                    updatedTime="41 min ago updated"
                    image="https://picsum.photos/id/1001/200/300" />
                </Collapse>


                <Collapse href="collapseExample4">
                    <Card cardTitle="MSI"
                    cardText="16GB Ram 512GB SSD"
                    updatedTime="22 min ago updated"
                    image="https://picsum.photos/id/1002/200/300" />
                </Collapse>


            </div>
        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root') // or document.querySelector('#root')
);
