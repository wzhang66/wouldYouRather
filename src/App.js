import React,{Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {handleInitialData} from './store/actions/shared';

class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div>
        Hello world
      </div>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  return{
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);