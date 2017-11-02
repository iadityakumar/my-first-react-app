import React, { Component } from 'react';

class Score extends Component {
    render() {
        let percent = (this.props.score/this.props.questions.length)*100;
        let message = "Better luck next time!";
        if (percent >= 80)
        {message = "Awesome Job!";}
        else if (percent > 60 && percent < 80)
        {message = "Good Job!";
        }
    return (
        <div>
          <h3 className="test">
            You scored {this.props.score} out of {this.props.questions.length}
          </h3>
          <br/>
          <h3>
            You scored {percent} % marks - {message}
          </h3>
        </div>
    );
    }
}

export default Score