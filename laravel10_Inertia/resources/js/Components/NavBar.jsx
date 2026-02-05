import React from 'react'
import { Link } from '@inertiajs/react';

function NavBar() {
  return (
    <>
    <div className="container-fluid sticky-top bg-white shadow-sm">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <Link href="/" className="navbar-brand">
          <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Medinova</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link href="/" className="nav-item nav-link active">Home</Link>
            <Link href="/about" className="nav-item nav-link">About</Link>
            <Link href="/product" className="nav-item nav-link">Products</Link>
            <Link href="price<Link" className="nav-item nav-link">Pricing</Link>
            <div className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
              <div className="dropdown-menu m-0">
                <Link href="blog<Link" className="dropdown-item">Blog Grid</Link>
                <Link href="detail<Link" className="dropdown-item">Blog Detail</Link>
                <Link href="team<Link" className="dropdown-item">The Team</Link>
                <Link href="testimonial<Link" className="dropdown-item">Testimonial</Link>
                <Link href="appointment<Link" className="dropdown-item">Appointment</Link>
                <Link href="search<Link" className="dropdown-item">Search</Link>
              </div>
            </div>
            <Link href="contact<Link" className="nav-item nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  </div>
    </>
  )
}

export default NavBar