import React,  { useState } from 'react';
import Start from './Start';
import Card from './Card';
import data from '../data';
import End from './End';

var index = 0;
var length = data.length;
var score = 0;

function Module(props){

    const [item, setItem] = useState(data[index]);
    const [questionOver, setQuestionOver] = useState(0);

    function quizStart(){
        setQuestionOver(1);
    }

    function optionClicked(option){
        if (option === data[index].answer){
            score++;
        }
    }

    function childCliked(){
        index++;
        console.log(index);
        if(index < length){
            setItem(data[index]);
        }
        else{
            console.log("questions over");
            setQuestionOver(2);
        }
    }

    if(questionOver === 0){
        return(
            <div id = 'module'>
                <Start Started = {quizStart}/>
            </div>
        );
    }
    else if(questionOver === 1){
        return(
            <div id = 'module'>
                <Card
                    key = {item.id}
                    question ={item.question} 
                    option1 = {item[1]} 
                    option2 = {item[2]}
                    option3 = {item[3]}
                    option4 = {item[4]}
                    answer = {item.answer}
                    clicked = {optionClicked}
                    nextClicked = {childCliked}
                />
            </div>
        );
    }

    else if (questionOver === 2){
        return(
            <div id = 'module'>
                <End finalscore = {score} total = {data.length} />
            </div>
        );
    }
    
}

export default Module;