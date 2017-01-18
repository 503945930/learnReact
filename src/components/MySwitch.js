import React from 'react';
import ReactDOM from 'react-dom';

var MySwitch = React.createClass({
   propTypes:{
      webUrl : React.PropTypes.string,
      openState: React.PropTypes.bool
   }, 
   getDefaultProps: function(){
      return {
         webUrl : 'https://www.baidu.com'
      }
   },
   getInitialState : function(){
      return {
        openState : false
      }
   },
   handleClick: function(){
		this.setState({
		  openState : (!this.state.openState)
		});
   },  
   render : function(){
      return (
      <div>
          {this.state.openState == false ? '已关灯' : '已开灯'}
          <button onClick={this.handleClick} >请点我</button>
      </div>
      );
   }
});

module.exports = MySwitch;