import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {handleInitialData} from './store/actions/shared';
import Home from './Components/Home/Home';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import NewQuestion from './Components/NewQuestion/NewQuestion';
import Nav from './Components/Nav/Nav';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Components/Login/Login';

class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {authUser} = this.props;
    let showContent = (
      <div>
        <Route path='/' component={Login}/>
      </div>
    );
    if (authUser!==''){
      showContent = (
        <div>
          <Route path='/' exact component={Home}/>
          <Route path='/leaderboard' exact component={Leaderboard}/>
          <Route path='/add' exact component={NewQuestion}/>
          <Route path='/questions/:id' component={QuestionPage}/>
        </div>
      )
    }
    return (
      <Router>
        <LoadingBar />
        <Nav />
        { this.props.loading === true 
          ? null 
          :
          showContent
          }
      </Router>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  return{
    authUser,
    loading: authUser === null
  }
}

export default connect(mapStateToProps)(App);