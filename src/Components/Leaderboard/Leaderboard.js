import React,{Component} from 'react';
import {connect} from 'react-redux';

import User from './User/User';

class Leaderboard extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.userList.map(userId => (
                        <li key={userId}>
                            <User userId={userId}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProp = ({users}) => {
    return {
        userList : Object.keys(users).sort((a,b)=>(users[b].questions.length+Object.keys(users[b].answers).length)-(users[a].questions.length+Object.keys(users[a].answers).length))
    }
}

export default connect(mapStateToProp)(Leaderboard);