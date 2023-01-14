import React from 'react';

const InfoBlock = ({children, textTitle, id}) => {
    return (
        <div className="info-block">
            <div className="title-block">
                <div className="name-icon" id={id}></div>
                <h2>{textTitle}</h2>
            </div>
            {children}
        </div>
    );
}

export default InfoBlock;