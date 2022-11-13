import React from 'react';

const Footer = ({date}) => {
    return (
        <footer>
            <div className="calendar"></div>
            <p>INFO UPDATED: {date}</p>
        </footer>
    );
}

export default Footer;