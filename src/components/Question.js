import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    onChange(e){
        e.preventDefault();
        const {question, setScore, setCurrent} = this.props;
        let selected = e.target.value;
        if (selected === question.correct)
        {
            setScore(this.props.score + 1);
        }
        else
        {
            setCurrent(this.props.current + 1);
        }
    }
    
    render() {
        const {question} = this.props;
    return (
        <div className = "testing">
        <h3> {question.text} </h3>
        <ul className = "list-group" >
            { question.choices.map(choice => {
                return <li className="list-group-item" key = {choice.id} >
                 <input type="radio" onChange={this.onChange.bind(this)} name = {question.id} value= {choice.id}/> {choice.text}
                </li>
            })
            }
        </ul>
        </div>
    );
    }
}

export default Question