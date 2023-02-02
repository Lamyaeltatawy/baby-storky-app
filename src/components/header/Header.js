import React from 'react';
import { Fragment } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import Button from '../main/Button';
const Header = () => {
    const signupButtonHandler = () => {
        console.log('done0');
    };

    return (
        <Fragment  >
            <header className={classes.header} >

                <div>Storky App</div>
                <div className={classes.button}>
                    <Button buttonJob="Log in" />
                    <Button buttonJob="Sign Up" onClick={signupButtonHandler} />

                </div>



            </header>

        </Fragment>
    )
}
export default Header;
