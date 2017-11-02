import React, { Component } from 'react';
import Question from '../components/Question';

class Results extends Component {
    render() {
    return (
        <div>
        { this.props.questions.map(question => {
            if(this.props.current === question.id)
            {
                return <Question key = {question.id} question={question} {...this.props}/>
            }
            })
        }
        </div>
    );
    }
}

export default Results