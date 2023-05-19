import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-info">
                                <h4>Our Office</h4>
                                <p>123 Main Street</p>
                                <p>City, State ZIP</p>
                                <p>Phone: 123-456-7890</p>
                                <p>Email: info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact