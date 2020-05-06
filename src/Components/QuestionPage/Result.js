import React,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './Result.module.css'

class Result extends Component {
    render(){
        const {answer, user, question} = this.props;
        const {name, avatarURL} = user;
        const {optionOne, optionTwo} = question;
        const voteOneNum = optionOne.votes.length;
        const voteTwoNum = optionTwo.votes.length;
        const voteOnePercent = voteOneNum/(voteOneNum+voteTwoNum)*100
        const voteTwoPercent = voteTwoNum/(voteOneNum+voteTwoNum)*100
        return(
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h3>Ask by {name}</h3>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img 
                        className={classes.Avatar}
                        src={avatarURL}
                        alt={`Avatar of ${name}`}/>
                    </div>
                    <div className="col-sm-8">
                        <div className={classes.Content}>
                            <h4>Results:</h4>
                            <div className={answer === 'optionOne' ? classes.Selected : classes.Unselected}>
                                <div>
                                    {optionOne.text} {answer === 'optionOne' ? <span className={classes.Vote}>You voted!</span> : null}
                                </div>
                                <div>
                                    {voteOneNum} of {voteOneNum+voteTwoNum} ({voteOnePercent.toFixed(2)}%) of people vote this
                                </div>
                            </div>
                            <div className={answer === 'optionTwo' ? classes.Selected : classes.Unselected}>
                                <div>
                                    {optionTwo.text} {answer === 'optionTwo' ? <span className={classes.Vote}>You voted!</span> : null}
                                </div>
                                <div>
                                    {voteTwoNum} of {voteOneNum+voteTwoNum} ({voteTwoPercent.toFixed(2)}%) of people vote this
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authUser,users,questions},{qid}) =>{
    const question = questions[qid];
    
    const user = users[question.author];
    return {
        question,
        user,
        answer: users[authUser].answers[qid]
    }
}

export default connect(mapStateToProps)(Result);
