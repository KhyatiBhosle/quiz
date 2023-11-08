function Card(props){
    function optionClicked (optionClicked, index){
        
        var Next = document.querySelector('.next');
        Next.style.display = "inline";

        var buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if(button.className === 'option'){
                button.disabled = true;
                if(button.textContent === optionClicked){
                    button.classList.add('wrong');
                }
                if(button.textContent === props.answer){
                    button.classList.add('correct');
                }
            }
        })
    }
    

    return(
        <div className = "cards">
            <div className="question">{props.question}</div>
            <br/>
            <div className="options">
                <button className="option" onClick={() => {optionClicked(props.option1); props.clicked(props.option1, 0);}}>{props.option1}</button><br/>
                <button className="option" onClick={() => {optionClicked(props.option2); props.clicked(props.option2, 1);}}>{props.option2}</button><br/>
                <button className="option" onClick={() => {optionClicked(props.option3); props.clicked(props.option3, 2);}}>{props.option3}</button><br/>
                <button className="option" onClick={() => {optionClicked(props.option4); props.clicked(props.option4, 3);}}>{props.option4}</button><br/><br/>
                <button className="next" onClick={props.nextClicked}>Next Question</button>
            </div>
        </div>
    )
}

export default Card;