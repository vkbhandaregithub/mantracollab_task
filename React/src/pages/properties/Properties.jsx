import React, { useState } from 'react';
import properties from '../../components/data';
import './Properties.css';
import Card from '../../components/card/Card';


function Properties() {
    const [activeTab, setActiveTab] = useState('all');
    const [filteredProperty, setFilteredProperty] = useState(properties);
    const [searchQuery, setSearchQuery] = useState('');

    const handleTabSelect = (city) => {
        setActiveTab(city);
        setFilteredProperty(
            city === 'all'
                ? properties
                : properties.filter((property) => property.city === city)
        );
    };

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredProperty(
            properties.filter((property) =>
                property.city.toLowerCase().includes(query)
            )
        );
    };

    return (
        <div className="property-container d-flex justify-content-center align-items-center flex-column" id="property">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="display-4">Properties</div>
                    <p>Find Your Dream Property With Us.</p>
                </div>
                <hr />
            </div>
            <input
                type="text"
                className="form-control mb-3 w-25"
                placeholder="Search by city"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul className="nav mt-3 nav-pills text-white gap-5 d-flex justify-content-center align-item-center">
                {['all', 'pune', 'mumbai', 'banglore', 'delhi'].map((city, i) => (
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

            <div className="row cards-container container row-cols-1 row-cols-md-4 g-4">
                {filteredProperty.map(({ id, city, image, price, description }) => (
                    <div key={id}>
                        <Card city={city} image={image} price={price} description={description} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Properties;
