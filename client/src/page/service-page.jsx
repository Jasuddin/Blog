import React from 'react';
import Layout from "../layout/layout.jsx";
import Footer from "../components/Footer.jsx";

const ServicePage = () => {
    return (
        <Layout>
            <h1> Service Page</h1>

            <p>This is a placeholder text</p>
            <div className="p-3 bg-light">
                <h5 className="fs-4 fw-bold ms-4">Service section...</h5>
            </div>

            <Footer/>
        </Layout>
    );
};

export default ServicePage;
