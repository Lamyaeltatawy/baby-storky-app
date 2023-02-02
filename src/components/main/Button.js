import React from 'react';
import classes from './Button.module.css';
const Button=(props)=>{
    const buttonJob=props.buttonJob;

    return(
        <button className={classes.button}>{buttonJob}</button>

    )
}
export default Button;