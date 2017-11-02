import React, { Component } from 'react';
import './App.css';
import QuestionList from './components/QuestionList';
import Score from './components/Score';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [
                {
                    id: 1,
                    text: "How many States are in the United States?",
                    choices: [
                        {
                            id: 'a',
                            text: '52',
                        },
                        {
                            id: 'b',
                            text: '50',
                        },
                        {
                            id: 'c',
                            text: '49'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: "What is the height of Mount Everest?",
                    choices: [
                        {
                            id: 'a',
                            text: '8,844 meters',
                        },
                        {
                            id: 'b',
                            text: '12,200 meters',
                        },
                        {
                            id: 'c',
                            text: '5,321 meters'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 3,
                    text: "How long is the Great Wall of China?",
                    choices: [
                        {
                            id: 'a',
                            text: '9,523.6 miles',
                        },
                        {
                            id: 'b',
                            text: '5,500.3 miles',
                        },
                        {
                            id: 'c',
                            text: '1,215.9 miles'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 4,
                    text: "What is the worlds population in March 2016?",
                    choices: [
                        {
                            id: 'a',
                            text: '7.125 Billion',
                        },
                        {
                            id: 'b',
                            text: '6.12 Billion',
                        },
                        {
                            id: 'c',
                            text: '8.94 Billion'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
    
        }
    }
        setScore(score)
        {
            this.setState({score});

        }

        setCurrent(current)
        {
            this.setState({current});

        }
    

  
  render() {
    return (
      <div className="App">
        <Score {...this.state}/>
        <h1 className="test">
          <QuestionList {...this.state} setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)}/>
        </h1>
      </div>
    );
  }
}

export default App;
