var React = require('react');
module.exports = React.createClass({

    render:function(){

        var text= this.props.text


        return(
            <button onClick={this.props.onToggleForm}  id="add-question-btn" className="btn btn-success">{text}</button>
        )
    }
})