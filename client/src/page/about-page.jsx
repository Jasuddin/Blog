import React from 'react';
import Footer from '../components/Footer.jsx';
import Layout from "../layout/layout.jsx";

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Page</h1>
                <p>This is a placeholder text</p>
                <div className="p-3 bg-light">
                    <h5 className="fs-4 fw-bold ms-4">Details about your us...</h5>
                    <br/>
                    <h5 className="fs-4 fw-bold ms-4">Our Team members...</h5>
                </div>
                <Footer/>
            </Layout>
        </div>
    );
};

export default AboutPage;
