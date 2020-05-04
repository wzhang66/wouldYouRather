import React,{Component} from 'react';
import {connect} from 'react-redux';

class Result extends Component {
    render(){
        const {answer, user, question} = this.props;
        const {name, avatarURL} = user;
        const {optionOne, optionTwo} = question;
        return(
            <div>
                <h3>Ask by {name}</h3>
                <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}/>
                <div>
                    <h4>Results:</h4>
                    <div>
                        {optionOne.text} {answer === 'optionOne' ? 'voted' : null}
                    </div>
                    <div>
                        {optionTwo.text} {answer === 'optionTwo' ? 'voted' : null}
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
