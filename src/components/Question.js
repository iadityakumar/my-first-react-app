import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    
    onChange(e){
        this.setState({selected_option: e.target.value})
    }
    
    handleSubmit(e){
        e.preventDefault();
        const {question, setScore, setCurrent} = this.props;
        if (this.state.selected_option === question.correct)
        {
            setScore(this.props.score + 1);
        }
        
        
            setCurrent(this.props.current + 1);
        
    }
    
    render() {
        let selected = "";
        const {question} = this.props;
    return (
        <div className = "testing">
            <h3> {question.text} </h3>
            <ul className = "list-group" >
                { question.choices.map(choice => {
                    return <li className="list-group-item" key = {choice.id} >
                    <input type="radio" onChange={this.onChange.bind(this)} name = "rbnNumber" value= {choice.id}/> {choice.text}
                    </li>
                    
                })
                }
            </ul>
            <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
    }
}

export default Question