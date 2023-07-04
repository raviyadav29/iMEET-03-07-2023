import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
    return (
        <div className='navbar'>
            <div className='title'>
                <h2>iMEET</h2>
            </div>
            <div className='title01'>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/skill">Skill</Link>
            </div>
        </div>
    )
}

export default Nav