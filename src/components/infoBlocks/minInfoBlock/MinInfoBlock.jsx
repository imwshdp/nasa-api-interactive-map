import React from 'react';

const MiniInfoBlock = ({children, textTitle, id}) => {
    return (
        <div className="info-block">
            <div className="name-icon" id={id}></div>
            <h2>{textTitle}</h2>
            {children}
        </div>
    );
}

export default MiniInfoBlock;