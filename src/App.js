import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import {handleInitialData} from './store/actions/shared';
import Home from './Components/Home/Home';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import NewQuestion from './Components/NewQuestion/NewQuestion';
import Nav from './Components/Nav/Nav';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import LoadingBar from 'react-redux-loading-bar';

class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <LoadingBar />
        <Nav />
        { this.props.loading === true 
          ? null 
          :
          <div>
          <Route path='/' exact component={Home}/>
          <Route path='/Leaderboard' exact component={Leaderboard}/>
          <Route path='/new' exact component={NewQuestion}/>
          <Route path='/question/:id' component={QuestionPage}/>
        </div>}
      </Router>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  return{
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);