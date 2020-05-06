import React,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './Question.module.css';

import {handleSaveAnswer} from '../../store/actions/questions';

class Question extends Component {
    state = {
        answer:''
    }

    handleSelect = (e) =>{
        this.setState({
            answer: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {qid,dispatch} = this.props;
        dispatch(handleSaveAnswer(qid,this.state.answer));        
    }

    render(){
        const {user, question} = this.props;
        const {name,avatarURL} = user;
        const {optionOne,optionTwo} = question;

        return(
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h3>{name} asks</h3>
                </div>
                <div className="row">
                    <div className="col-sm-4" >
                        <img 
                        className={classes.Avatar}
                        src={avatarURL}
                        alt={`Avatar of ${name}`}/>
                    </div>

                    <div className="col-sm-8">
                        <div className={classes.Content}>
                            <h4>Would you rather...</h4>
                            <form onSubmit={this.handleSubmit}>
                                <label className={classes.Selection}>
                                <input 
                                    
                                    type="radio"
                                    value="optionOne"
                                    name="answer"
                                    onChange={(e)=>this.handleSelect(e)}/>
                                    {optionOne.text}
                                </label>
                                <label className={classes.Selection}>
                                <input 
                                    
                                    type="radio"
                                    value="optionTwo"
                                    name="answer"
                                    onChange={(e)=>this.handleSelect(e)}/>
                                    {optionTwo.text}
                                </label>
                                <button 
                                    className={classes.Button}
                                    type="submit"
                                    disabled={this.state.answer.length===0}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = ({users, questions},{qid}) => {
    const question = questions[qid];
    const user = users[question.author];
    return {
        user,
        question
    }
}

export default connect(mapStateToProps)(Question);