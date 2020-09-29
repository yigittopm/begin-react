import React from 'react';

class Collapse extends React.Component {

    state = {showContent: false};

    showMore = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    componentDidMount(){
        console.log('Component created');
    }

    componentDidUpdate(){ 
        console.log('Component Updated');
    }


    render() {
        return (
            <div>
                <button className="btn btn-success w-100" onClick={this.showMore}>
                     {/* {this.props.children.props.cardTitle} */}
                     {React.Children.map(this.props.children, children => children.props.cardTitle)}
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {React.Children.map(this.props.children, children => children)}
                        </div>
                    ) : null
                }

            </div>
        );
    }
}

export default Collapse;