import React,{Component} from 'react';
import {connect} from 'react-redux';

import QuestionCard from './QuestionCard';

class Home extends Component {
    state = {
        answerState: false
    }

    showAnswered = () =>{
        this.setState({
            answerState:true
        })
    }

    showUnanswered = () => {
        this.setState({
            answerState:false
        })
    }
    
    render(){
        const {authUser, questions} = this.props

        return(
            <div>
                <h3>Questions</h3>
                <div>
                    <button onClick={this.showUnanswered}>Unanswered questions</button>
                    <button onClick={this.showAnswered}>Answered questions</button>
                </div>
                <ul>
                    {this.props.questionIds.map(questionId=>{
                        let questionreplay = null;
                        const {optionOne,optionTwo} = questions[questionId]
                        const voteList = (optionOne.votes ? optionOne.votes : []).concat(optionTwo.votes ? optionTwo.votes: []);
                        if (voteList.includes(authUser) === this.state.answerState) {
                            questionreplay = (<li key={questionId}><QuestionCard questionId={questionId}/></li>)
                        }
                        
                        return questionreplay
                    })}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = ({questions,authUser}) => {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
        questions,
        authUser
    }
}


export default connect(mapStateToProps)(Home);