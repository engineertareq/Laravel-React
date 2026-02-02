import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import Leftsize from '../components/leftsize'; 
import Ads from '../components/ads';

export default function Home() {
    return (
        <>
            <Head title="Home" />
             
            <Navbar /> 
              
            <div className="container-fluid text-center">    
                <div className="row content">
                    <Leftsize />
                    
                    <div className="col-sm-8 text-left"> 
                        <h1>Welcome</h1>
                        <p>Content goes here...</p>
                    </div>
                 <Ads />
                    
                </div>
            </div>

            <Footer />
        </>
    );
}