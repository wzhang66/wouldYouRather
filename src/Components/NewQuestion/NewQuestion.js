import React,{Component} from 'react';
import {connect} from 'react-redux';
import { handleAddQuestion } from '../../store/actions/questions';


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
            <div>
                <h3>Create New Question</h3>
                <p>Complete the question</p>
                <p>Would you rather ...</p>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Enter Option One Text Here" 
                        value={this.state.optionOne}
                        onChange={(event)=>this.optionOneInput(event)}/>
                    <p>Or</p>
                    <input 
                        placeholder="Enter Option Two Text Here" 
                        value={this.state.optionTwo}
                        onChange={(event)=>this.optionTwoInput(event)}/>
                    <button
                        type="submit"
                        disabled={this.state.optionOne.length === 0 || this.state.optionTwo.length === 0}>
                        Submit
                    </button>
                </form>
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