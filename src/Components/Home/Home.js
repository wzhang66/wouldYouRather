import React,{Component} from 'react';
import {connect} from 'react-redux';

import QuestionCard from './QuestionCards/QuestionCard';
import classes from './Home.module.css'

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
            <div className={classes.Container}>
                <div>
                    <div className={classes.ShowQuestions}>
                        <button 
                            className={this.state.answerState ? classes.InactiveButton : classes.ActiveButton} 
                            onClick={this.showUnanswered}>
                            Unanswered questions
                        </button>
                    </div>
                    <div className={classes.ShowQuestions}>
                        <button 
                            className={this.state.answerState ? classes.ActiveButton : classes.InactiveButton}
                            onClick={this.showAnswered}>
                            Answered questions
                        </button>
                    </div>
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