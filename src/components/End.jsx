import React from 'react';

function End(props){
    var score = props.finalscore;
    var total = props.total;
    var percent = (score/total)*100;
    var verdict = "";
    if (percent === 100){
        verdict = "Perfect Score! You are truely a Bollywood junkie!";
    }

    else if (percent > 75 && percent < 100){
        verdict = "Nice! You have surely seen a lot of movies";
    }

    else{
        verdict = "Better Luck next time!"
    }
    return(
        <div>
            <h1>
                END!
            </h1>
            <p>                
                {score} out of {total} <br/>
                {verdict}
            </p>
        </div>
    );
}

export default End;