import React,{Component} from 'react';
import {connect} from 'react-redux';

import Question from './Question';
import Result from './Result';
import Error from './Error'

class QuestionPage extends Component {
    render(){
        const {answerState, qid,questions} = this.props;
        if(questions[qid] !== undefined){
            let displayContent = answerState 
                ? <Result qid={qid}/> 
                : <Question qid={qid}/>

            return(
                displayContent
            )
        } else {
            return (<Error />)
        }
        
    }
}

const mapStateToProps = ({authUser,users,questions},props) => {
    const qid = props.match.params.id;
    return {
        answerState: Object.keys(users[authUser].answers).includes(qid),
        qid,
        questions
    }
}

export default connect(mapStateToProps)(QuestionPage);