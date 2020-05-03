import React,{Component} from 'react';
import { connect } from 'react-redux'

class QuestionCard extends Component {
    render(){
        const {question, questionUser} = this.props; 
        
        const {
            name,
            avatarURL
        } = questionUser;
        const {optionOne} = question;

        return(
            <div>
                <h3>Asked by {name}</h3>
                <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}/>
                <h4>Would you rather</h4>
                <p>{optionOne.text}</p> 
                {/* <p>{this.props.answered ? 'answered' : 'not answered'}</p> */}
                <button>View pull</button>               
            </div>
        )
    }
}

const mapStateToProps = ({users, questions},{questionId}) => {
    const question = questions[questionId];
    const questionUser = users[question.author];
    return {
        question,
        questionUser
    }
}

export default connect(mapStateToProps)(QuestionCard);