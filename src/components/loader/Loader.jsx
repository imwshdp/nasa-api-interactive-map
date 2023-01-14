import React from "react";
import css from "./Loader.module.scss"

const Loader = () => {
    return (
        <div className={css.Wrapper}>
            <div className={css.loader} />
        </div>
    );
};

export default Loader;