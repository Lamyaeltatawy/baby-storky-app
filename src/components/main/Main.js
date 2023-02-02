import { Fragment } from "react"
import earth from '../../assets/earth.jpg';
import classes from './Main.module.css'
import Button from "./Button";
import AvailableFeatures from "./AvailableFeatures";
import React from "react";
const Main = () => {

    return (
        <Fragment>
            <div className={classes.mainImg}>
                <img src={earth} />
            </div>
            <div className={classes.text}>
                <h1>welcome to Storky App !</h1>
                <h4>A Safe Space to Share Your Content </h4>
            </div>
            <div className={classes.buttonPos}>
                <Button buttonJob="Let's Start" />

            </div>
            <h1 className={classes.h1}>Explore Our Available Features</h1>

            <AvailableFeatures />
            
        </Fragment >
    )
}
export default Main