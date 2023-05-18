import React, { useState } from 'react';
import properties from '../../components/data';
import './Properties.css';

function Properties() {
    const [activeTab, setActiveTab] = useState('all');
    const [filteredProperty, setFilteredProperty] = useState(properties);

    const handleTabSelect = (city) => {
        setActiveTab(city);
        setFilteredProperty(
            city === 'all'
                ? properties
                : properties.filter(property => property.city === city)
        );
    };

    return (
        <div className='property-container py-5'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="display-4">Properties</div>
                    <p>Find Your Dream Property With Us.</p>
                </div>
                <hr />
            </div>
            <ul className="nav mt-3 nav-pills text-white gap-5 d-flex justify-content-center align-item-center">
                {['all', 'pune', 'mumbai', 'banglore', 'hydrabad', 'delhi'].map((city, i) => (
                    <li className="nav-item mb-5" key={city}>
                        <button
                            className={`nav-link ${activeTab === city ? 'active' : ''}`}
                            onClick={() => handleTabSelect(city)}
                        >
                            {city.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="row cards-container row-cols-1 row-cols-md-4 g-4">
                {filteredProperty.map(({ id, city, image, price, description }) => (
                    <div key={id}>
                        <div className="card">
                            <img src={image} className="card-img-top img-fluid" alt={city} />
                            <div className="card-body text-black">
                                <p className="card-text text-uppercase"><b>Location : </b>{city}</p>
                                <p className="card-text text-capitalize"><b>Price : </b>{price}</p>
                                <p className="card-text text-capitalize"><b>Info : </b>{description}</p>
                                <p className="card-text">{price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Properties;
