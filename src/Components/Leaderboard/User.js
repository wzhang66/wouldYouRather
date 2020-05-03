import React,{Component} from 'react';
import {connect} from 'react-redux';

class User extends Component {
    render(){
        const {
            name,
            avatarURL,
            questions,
            answers
        } = this.props.user;

        return(
            <div>
                <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}/>
                <div>
                    <h3>{name}</h3>
                    <p>Answered questions       {questions.length}</p>
                    <p>Created questions        {Object.keys(answers).length}</p>                    
                </div>
                <div>
                    <h4>Score</h4>
                    <p>{questions.length+Object.keys(answers).length}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProp = ({users},{userId}) => {
    return{
        user: users[userId]
    }
}

export default connect(mapStateToProp)(User);