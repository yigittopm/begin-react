import React from 'react';

class Collapse extends React.Component {

    constructor(){
        super();
        this.state = {
            showContent: true
        };

    }

    render() { 
        return (
            <div>
                <a className="btn btn-success w-100">
                    {this.props.children.props.cardTitle}
                </a>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {this.props.children}
                        </div>
                    ) : null
                }

            </div>
        );
    }
}

export default Collapse;