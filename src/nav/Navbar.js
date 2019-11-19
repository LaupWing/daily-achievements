import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    return (
        <div className="Navbar">
            <SignedInLinks/>
            <SignedOutLinks/>
        </div>
    )
}

export default Navbar
