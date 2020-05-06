import React,{ Component } from 'react'
import {connect} from 'react-redux';

import {setAuthUser} from '../../store/actions/AuthUser'
import classes from './Login.module.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state={
        user:''
    }

    selectHandle = (event) => {
        this.setState({
            user: event.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault();
        const{dispatch} = this.props
        dispatch(setAuthUser(this.state.user));
        return <Redirect to="/" />;
    }
    
    render(){
        const {users} = this.props;
        const userList = Object.keys(users);

        return(
            <div className={classes.Container}>
                <h3>Would You Rather?</h3>
                <p>Please sign in...</p>
                <form onSubmit={this.submitHandler}>
                    <select onChange={this.selectHandle} required className={classes.SelectUser}>
                        <option defaultValue value="">Select User</option>
                        {userList.map(userId=>(
                            <option 
                                key={userId} 
                                value={userId}>
                                {users[userId].name}
                            </option>
                        ))}
                    </select>
                    <button 
                        className={this.state.user.length===0 ? classes.DisableButton : classes.Button}
                        disabled={this.state.user.length===0}
                        type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({users}) =>{
    return{
        users
    }
}

export default connect(mapStateToProps)(Login);