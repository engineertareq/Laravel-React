import React from 'react';
import { Link } from '@inertiajs/react'; 


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button 
              type="button" 
              className="navbar-toggle" 
              data-toggle="collapse" 
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <Link className="navbar-brand" href="/">Logo</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar; 