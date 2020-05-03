import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import {handleInitialData} from './store/actions/shared';
import Home from './Components/Home/Home';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import NewQuestion from './Components/NewQuestion/NewQuestion';
import Nav from './Components/Nav/Nav';

class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Nav />
        <div>
          <Route path='/' exact component={Home}/>
          <Route path='/Leaderboard' exact component={Leaderboard}/>
          <Route path='/new' exact component={NewQuestion}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  return{
    authUser: authUser
  }
}

export default connect(mapStateToProps)(App);