import React from 'react';

const Navbar = ({sourceRef}) => {
    return (
        <nav>
            <button className="NavButton">
                <a href="https://api.nasa.gov/">NASA API</a>
            </button>
            <button className="NavButton">
                <a href={sourceRef}>Source Info</a>
            </button>
        </nav>
    );
}

export default Navbar;