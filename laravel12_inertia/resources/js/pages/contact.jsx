import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import Leftsize from '../components/leftsize'; 
import Ads from '../components/ads';

export default function Contact() {
    return (
        <>
            <Head title="Contact Us" />
             
            <Navbar /> 
              
            <div className="container-fluid text-center">    
                <div className="row content">
                    <Leftsize />
                    
                    <div className="col-sm-8 text-left"> 
                        <h1>Contact Us</h1>
                        <p>Feel free to reach out!</p>
                    </div>

                    <Ads />
                </div>
            </div>

            <Footer />
        </>
    );
}