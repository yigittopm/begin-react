import React from 'react';

// Create Card Companent
const Card = (props) => { 
    return (
        <div class="card">
            <img src="..\..\public\logo512.png" class="card-img-top" alt="React Logo" />
            <div class="card-body">
                <h5 class="card-title">{props.cardTitle}</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
}

export default Card;