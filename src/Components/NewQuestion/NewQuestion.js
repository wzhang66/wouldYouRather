import React,{Component} from 'react';
import {connect} from 'react-redux';
import { handleAddQuestion } from '../../store/actions/questions';

import classes from './NewQuestion.module.css';

class NewQuestion extends Component {
    state = {
        optionOne:'',
        optionTwo:''
    }

    optionOneInput = (event) =>{
        this.setState({
            optionOne:event.target.value
        })
    }

    optionTwoInput = (event) =>{
        this.setState({
            optionTwo:event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {authUser,dispatch} = this.props;
        const {optionOne,optionTwo} = this.state;
        const question = {
            author:authUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }
        dispatch(handleAddQuestion(question));
        this.setState({
            optionOne:'',
            optionTwo:''
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h3 style={{margin:'3px'}}>Create New Question</h3>
                </div>
                <div className={classes.Content}>
                    <p>Complete the question</p>
                    <p className={classes.Title}>Would you rather ...</p>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            className={classes.InputElement}
                            placeholder="Enter Option One Text Here" 
                            value={this.state.optionOne}
                            onChange={(event)=>this.optionOneInput(event)}/>
                        <div className={classes.OrSeperator}>
                            <span>OR</span>
                        </div>
                        <input 
                            className={classes.InputElement}
                            placeholder="Enter Option Two Text Here" 
                            value={this.state.optionTwo}
                            onChange={(event)=>this.optionTwoInput(event)}/>
                        <button
                            type="submit"
                            className={classes.Submit}
                            disabled={this.state.optionOne.length === 0 || this.state.optionTwo.length === 0}>
                            Submit
                        </button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapStateToProp = ({authUser}) =>{
    return{
        authUser
    }
}

export default connect(mapStateToProp)(NewQuestion);