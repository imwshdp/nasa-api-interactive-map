import React from "react";
import classes from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.loader} />
        </div>
    );
};

export default Loader;