import React from 'react';

function Start(props){
    return(
        <div>
            <h1>
                Welcome!
            </h1>
            <br/>
            <p>
               Only true fans can get all the answers right.<br/>If you believe you are a bollywood expert, we challenge you to take this quiz and find out!
            </p>
            <br/>
            <button onClick = {props.Started}>Get Started!</button>
        </div>
    );
}

export default Start;