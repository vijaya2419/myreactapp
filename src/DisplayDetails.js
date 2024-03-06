import React from 'react';
import classes from './App.module.css';

const DisplayDetails = (props) => {


   return(
        <div>
            <h1>Name:{props.firstName} {props.lastName}</h1>
            <p>Age: {props.age}</p>
            <p>Job:{props.job}</p>
            <p>Like Count:{props.likedCnt}</p>
            <button className={classes.button1} onClick={props.onBtnLikedClicked}>Like</button>
            <button className={classes.button1} onClick={props.onBtnDisLikedClicked}>DisLike</button>
        </div>
    )

}

export default DisplayDetails;