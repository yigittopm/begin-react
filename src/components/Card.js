import React from 'react';

// Create Card Companent
const Card = (props) => { 
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="React Logo" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
            </div>
        </div>
    );
}

export default Card;