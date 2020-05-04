import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class QuestionCard extends Component {
    render(){
        const {question, questionUser} = this.props; 
        
        const {
            name,
            avatarURL
        } = questionUser;
        const {id,optionOne} = question;

        return(
            <div>
                <h3>Asked by {name}</h3>
                <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}/>
                <h4>Would you rather</h4>
                <p>{optionOne.text}</p> 
                {/* <p>{this.props.answered ? 'answered' : 'not answered'}</p> */}
                <Link to={`/question/${id}`} >View pull</Link>               
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