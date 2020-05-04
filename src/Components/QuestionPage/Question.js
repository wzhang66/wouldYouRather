import React,{Component} from 'react';
import {connect} from 'react-redux';

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
            <div>
                <h3>{name} asks</h3>
                <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}/>
                <h4>Would you rather...</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input 
                        type="radio"
                        value="optionOne"
                        name="answer"
                        onChange={(e)=>this.handleSelect(e)}/>
                    {optionOne.text}
                    </label>
                    <label>
                    <input 
                        type="radio"
                        value="optionTwo"
                        name="answer"
                        onChange={(e)=>this.handleSelect(e)}/>
                    {optionTwo.text}
                    </label>
                    <button 
                        type="submit"
                        disabled={this.state.answer.length===0}>
                        Submit
                    </button>
                </form>
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