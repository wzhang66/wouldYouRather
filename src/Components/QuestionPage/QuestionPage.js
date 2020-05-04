import React,{Component} from 'react';
import {connect} from 'react-redux';

import Question from './Question';
import Result from './Result';

class QuestionPage extends Component {
    render(){
        const {answerState, qid} = this.props;
        let displayContent = answerState 
            ? <Result qid={qid}/> 
            : <Question qid={qid}/>

        return(
            displayContent
        )
    }
}

const mapStateToProps = ({authUser,users},props) => {
    const qid = props.match.params.id;
    return {
        answerState: Object.keys(users[authUser].answers).includes(qid),
        qid
    }
}

export default connect(mapStateToProps)(QuestionPage);