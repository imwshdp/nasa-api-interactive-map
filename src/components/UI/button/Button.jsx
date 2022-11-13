import React from 'react';
import cl from "./Button.module.css"

const Button = ({children, ...props}) => {

    return (
        <button className={cl.Btn}>
            {children}
        </button>
    );
}

export default Button;