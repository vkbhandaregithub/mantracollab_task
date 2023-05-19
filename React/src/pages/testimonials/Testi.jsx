import React from 'react';
import './Testi.css';
import testimonials from '../TestiData';
const Testi = () => {


    return (
        <>
            <div className="testimonials-container ">
                <div className="section-title text-center">
                    <h3 className='display-4'>Testimonial</h3>
                </div>
                <hr className='mb-3 w-25 mx-auto' />
                <div className="row d-flex justify-content-center align-items-center main">
                    {
                        testimonials.map((ele, i) => {
                            return (
                                <div className="col-md-4 col-10 mx-auto d-flex justify-content-center align-items-center mb-3" key={i}>
                                    <div className="card-container">
                                        <div className="card-img">
                                            <img src={ele.avatar} alt="card-avatar" className='img-fluid' />
                                        </div>
                                        <div className="card-title">
                                            {ele.author}
                                        </div>
                                        <div className="card-info">
                                            {ele.content}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Testi;
