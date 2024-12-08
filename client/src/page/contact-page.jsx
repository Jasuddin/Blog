import React from 'react';
import Layout from "../layout/layout.jsx";
import Footer from "../components/Footer.jsx";

const ContactPage = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Contact Us</h1>
                <form className="row g-3">
                    {/* Name Field */}
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
                    </div>

                    {/* Email Field */}
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
                    </div>

                    {/* Subject Field */}
                    <div className="col-12">
                        <label htmlFor="inputSubject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="inputSubject" placeholder="Enter subject" />
                    </div>

                    {/* Message Field */}
                    <div className="col-12">
                        <label htmlFor="inputMessage" className="form-label">Message</label>
                        <textarea className="form-control" id="inputMessage" rows="5" placeholder="Enter your message"></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </Layout>
    );
};

export default ContactPage;
