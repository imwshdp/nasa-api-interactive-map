import React from 'react';
import css from "./Button.module.scss"

const Button = ({ children, ...props }) => {
    return (
        <button className={css.Btn}>
            {children}
        </button>
    );
}

export default Button;