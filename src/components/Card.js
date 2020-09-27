import React from 'react';
import PropTypes from 'prop-types';

// Create Card Companent
class Card extends React.Component {

    static defaultProps = {
        cardTitle : "Default Card Title",
        cardText : "Default Card Text",
        updatedTime : "2 hours ago"
    }

    render() {
        return (
            <div className="card w-100">
                <img src={this.props.image} className="card-img-top" alt="React Logo" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.updatedTime}</small></p>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    cardTitle : PropTypes.string.isRequired  
}

export default Card;