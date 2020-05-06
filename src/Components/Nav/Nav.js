import React,{Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {setAuthUser} from '../../store/actions/AuthUser';
// import classes from './Nav.module.css'

class Nav extends Component {
  logoutHandler = () => {
    const {dispatch} = this.props;
    dispatch(setAuthUser(''));
  }

  render(){
    const {users, authUser} = this.props
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Questions
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          {authUser && authUser !== '' 
            ? <React.Fragment>
                <li>
                  Hello {users[authUser].name} 
                  {/* <img src={users[authUser].avatarURL} alt= 'avatrs URL' /> */}
                </li>
                <li onClick={this.logoutHandler}>
                  <NavLink to='/' activeClassName='active'>
                    Log Out
                  </NavLink>
                </li>
              </React.Fragment>
            : null }
        </ul>
      </nav>
    )
  }
} 

const mapStateToProps = ({authUser, users}) =>{
  return{
    authUser,
    users
  }
}

export default connect(mapStateToProps)(Nav);