import React from 'react'

const Navbar = () => {
    return(
        <nav className="nav-wrapper black darken-3">
            <div classNmae="container">
                <a className="brand-logo">The Artistic world</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar