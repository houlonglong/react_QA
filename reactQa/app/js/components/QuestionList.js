/**
 * Created by houlonglong on 16/1/24.
 */
var React = require('react');
var Questionltem = require('./questionltem');
module.exports = React.createClass({

    render:function(){
        var questions = this.props.questions;
        //var onVote =  this.props.onVote
        //console.log(questions)
        if( !Array.isArray(questions) ) throw new Error('this.props.questions问题必须是数组');
        var questionComps = questions.map((qst)=>{
            return <Questionltem key={qst.key}
                        title={qst.title}
                        description={qst.description}
                        voteCount={qst.voteCount}
                                 questionKey={qst.key}
                        onVote={ this.props.onVote }
                        />
        });
        return(
            <div id="questions" className="">
                {questionComps}
            </div>

        )
    }
})