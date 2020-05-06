import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './QuestionCard.module.css';

class QuestionCard extends Component {
    render(){
        const {question, questionUser} = this.props; 
        
        const {
            name,
            avatarURL
        } = questionUser;
        const {id,optionOne} = question;

        return(
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h3>{name} asks</h3>
                </div>
                <div className="row">
                    <div className={"col-12 col-md-4"}>
                        <div className = {classes.Avatar}>
                            <img 
                                
                                src={avatarURL}
                                alt={`Avatar of ${name}`}/>
                        </div>
                    </div>
                    <div className={"col-12 col-md-8"}>
                        <div className={classes.Content}>
                            <h4>Would you rather</h4>
                            <p>...{optionOne.text}...</p> 
                            {/* <p>{this.props.answered ? 'answered' : 'not answered'}</p> */}
                            <Link  to={`/questions/${id}`} ><button className={classes.Button}>View pull</button></Link>  
                        </div>
                        
                    </div>
                </div>
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