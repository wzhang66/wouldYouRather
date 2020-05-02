import React,{Component} from 'react';
import { connect } from 'react-redux'

class QuestionCard extends Component {
    render(){
        const {question, questionUser,authUser} = this.props; 
        
        const {
            name,
            avatarURL
        } = questionUser;
        const {optionOne,optionTwo} = question;
        const voteList = (optionOne.votes ? optionOne.votes : []).concat(optionTwo.votes ? optionTwo.votes: []);

        return(
            <div>
                <h3>Asked by {name}</h3>
                <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}/>
                <h4>Would you rather</h4>
                <p>{optionOne.text}</p> 
                <p>{voteList.includes(authUser) ? 'answered' : 'not answered'}</p>
                <button>View pull</button>               
            </div>
        )
    }
}

const mapStateToProps = ({authUser, users, questions},{questionId}) => {
    const question = questions[questionId];
    const questionUser = users[question.author];
    return {
        authUser,
        question,
        questionUser
    }
}

export default connect(mapStateToProps)(QuestionCard);