import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import TopBar from '@/Components/TopBar';
import React from 'react';
function FrontLayout({children}) {
  return (
    <>
   <div>
      <TopBar />
  {/* Navbar Start */}
      <NavBar />
  {/* Navbar End */}
</div>


    {children}

<div>
  {/* Footer Start */}
   <Footer />
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#!" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>


    </>
  )
}

export default FrontLayout