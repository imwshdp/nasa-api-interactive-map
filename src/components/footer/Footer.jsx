import React from 'react';

const Footer = ({ date }) => {
    return (
        <footer>
            <div className="calendar"></div>
            <p>INFORMATION UPDATED : {date}</p>
        </footer>
    );
}

export default Footer;