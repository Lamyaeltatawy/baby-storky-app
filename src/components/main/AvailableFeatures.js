import Card from "./Card";
import classes from './AvailableFeatures.module.css';
import React from "react";
import mobile from '../../assets/mobile.jpg'
import youtube from '../../assets/youtube.png'
import education from '../../assets/education.png'
import world from '../../assets/world.jpg'
import button from '../../assets/button.png'


const AvailableFeatures = () => {

    const feature1 = <h1>Upload your content</h1> ;
    const feature2 = <h1>Suitable place to learn</h1>;
    const feature3 = <h1>Communication became much easier</h1>;
    const feature4 = <h1>Our mobile application</h1>;
    const feature5 = <h1>your content is safe here</h1>;




    return (

        <section className={classes.features}>
            
                <Card><img className={classes.imge} src={youtube} alt="picture of uploading files and videos featute " /><div className={classes.featuresDescription}>{feature1}</div></Card>
                <Card><img className={classes.imge} src={education} alt="picture of stutent able to use the website easily " /><div className={classes.featuresDescription}>{feature2}</div></Card>
                <Card><img className={classes.imge} src={world} alt="picture of our community" /><div className={classes.featuresDescription}>{feature3}</div></Card>
                <Card><img className={classes.imge} src={mobile} alt="picture of our mobile application" /><div className={classes.featuresDescription}>{feature4}</div></Card>
                <Card><img className={classes.imge} src={button} alt="picture of saving your content safe  " /><div className={classes.featuresDescription}>{feature5}</div></Card>
            


        </section>
    )
}

export default AvailableFeatures;