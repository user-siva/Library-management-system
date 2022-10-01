import React from 'react';
import "./card.css"

function Card() {
    return (
        <div className='container'>
            <div className='cardContainer'>
                <div className='cardTop'>
                    <img src={process.env.PUBLIC_URL + '/images/1.jpg'} alt="" id='cardImage' width="250px" height="150px" />
                </div>
                <div className="cardBottom">
                    <strong id='name'>Name:</strong><span id='bookName'>CUDA by Example</span>
                    <button className='btn'>View</button>
                </div>
            </div>
        </div>
    );
}

export default Card;