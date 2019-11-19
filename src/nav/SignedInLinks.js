import React from 'react'
import {NavLink} from 'react-router-dom'
const SignedInLinks = () => {
    return (
        <ul className="signed-in">
            <li><NavLink activeClassName='is-active' to='/all'>All</NavLink></li>
            <li><NavLink activeClassName='is-active' to='/'>Today</NavLink></li>
            <li><NavLink activeClassName='is-active' to='/logout'>Logout</NavLink></li>
            <li ><NavLink className="btn-account" activeClassName='is-active' to='/account'>LN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks
