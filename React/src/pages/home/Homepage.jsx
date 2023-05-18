import React, { } from 'react'
import './Homepage.css'
import home from '../../assets/bgone.png'
const Homepage = () => {
    return (
        <>
            <div className="homepage-container d-flex justify-content-center align-items-center">
                <div className="col-md-12 mt-5">
                    <div className="row ">
                        <div className="col-md-6 col-10 mx-auto order-2 order-lg-1 ps-5 d-flex flex-column justify-content-center align-items-start">
                            <h1 className='display-3'>
                                Find your dream property  with us.
                            </h1>
                            <p className='my-3'>No brokarage. No Hidden Charges.</p>
                            <button className='btn cta-btn '>Know More.</button>
                        </div>
                        <div className="col-md-6 col-10 home-img-container order-lg-2 mx-auto mt-3 order-1 p-5 d-flex justify-content-center align-items-center">
                            <img src={home} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage