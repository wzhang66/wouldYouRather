import React,{Component} from 'react';
import {connect} from 'react-redux';

import classes from './User.module.css';

class User extends Component {
    render(){
        const {
            name,
            avatarURL,
            questions,
            answers
        } = this.props.user;

        return(
            <div className={classes.Container}>
                <div className="row">
                    <div className="col-sm-3" style={{padding:"0"}}>
                        <img 
                        className={classes.Avatar}
                        src={avatarURL}
                        alt={`Avatar of ${name}`}/>
                    </div>
                    <div className="col-sm-6" style={{padding:"0"}}>
                        <div className={classes.Content}>
                            <h3>{name}</h3>
                            <p>Answered questions       <span className={classes.Result}>{questions.length}</span></p>
                            <p>Created questions        <span className={classes.Result}>{Object.keys(answers).length}</span></p>    
                        </div>        
                    </div>
                    <div className="col-sm-3" style={{padding:"0"}}>
                        <div className={classes.Score}>
                            <h4>Score</h4>
                            <div>
                                <div className={classes.TotalScore}>
                                    {questions.length+Object.keys(answers).length}
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
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