import { Link } from '@inertiajs/react'; 
import React from 'react'

function Leftsize() {
  return (
    <>
    <div className="col-sm-2 sidenav">
                        <p><Link href="/dashboard">Dashboard</Link></p>
                        <p><Link href="/settings">Settings</Link></p>
                        <p><Link href="/contact">Contact</Link></p>
                    </div>
    </>
  )
}

export default Leftsize;