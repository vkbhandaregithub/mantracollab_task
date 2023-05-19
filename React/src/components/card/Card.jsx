import React from 'react';
import './Card.css'
const Card = ({ city, image, price, description }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top img-fluid" alt={city} />
            <div className="card-body text-black">
                <p className="card-text text-uppercase">
                    <b>Location : </b>
                    {city}
                </p>
                <p className="card-text text-capitalize">
                    <b>Price : </b>
                    {price}
                </p>
                <p className="card-text text-capitalize">
                    <b>Info : </b>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
