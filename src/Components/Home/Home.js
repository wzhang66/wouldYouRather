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
        const {authInfo, questionIds} = this.props;
        let authAnswer =  authInfo ? Object.keys(authInfo.answers) : []
        return(
            <div>
                <h3>Questions</h3>
                <div>
                    <button onClick={this.showUnanswered}>Unanswered questions</button>
                    <button onClick={this.showAnswered}>Answered questions</button>
                </div>
                <ul>
                    {questionIds.map(questionId=>{
                        let questionreplay = null;
                        if (authAnswer.includes(questionId) === this.state.answerState) {
                            questionreplay = (
                                <li key={questionId}>
                                    <QuestionCard 
                                        questionId={questionId}
                                        answered={this.state.answerState}/>
                                </li>)
                        }
                        
                        return questionreplay
                    })}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = ({questions,authUser,users}) => {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
        authInfo: users[authUser]
    }
}


export default connect(mapStateToProps)(Home);