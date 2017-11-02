import React, { Component } from 'react';

class Score extends Component {
    render() {
        let percent = (this.props.score/this.props.questions.length)*100;
        let message = "";
        if (percent >= 80)
        {message = " - Awesome Job!";}
        else if (percent > 60 && percent < 80)
        {message = " - Good Job!";
        }
        else
        {
          message = " - Better luck next time!";
        }
    return (
        <div>
          <h3 className="test">
            You scored {this.props.score} out of {this.props.questions.length}
          </h3>
          <br/>
          <h3>
            You scored {percent} % marks {(this.props.current -1) === this.props.questions.length ? message : ""}
          </h3>
        </div>
    );
    }
}

export default Score