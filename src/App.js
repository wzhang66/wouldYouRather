import React,{Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {handleInitialData} from './store/actions/shared';
import Home from './Components/Home';

class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div>
        <Home authUser={this.props.authUser}/>
      </div>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  return{
    authUser: authUser
  }
}

export default connect(mapStateToProps)(App);