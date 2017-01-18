import React from 'react';

export default class MoveInputText extends React.Component{

	constructor(){
	   super();
	   this.state = ({
	      inputVale : 123
	   });
	}
	
	_onChange(event){
		//获取输入框的值
		var v = event.target.value;
		//设置状态
		this.setState({
			inputVale : v++
		});
	}
	
   doClick(){
      debugger;
      this.refs.meg.value = (this.state.inputVale++);
   }
   
   render(){
     return <div>
 		{/*<input name='message' value='123' ref="meg"/>*/}
		<input name='message' value={this.state.inputVale} ref="meg" onChange={this._onChange.bind(this)} ref="meg"/>
     	<button onClick={this.doClick.bind(this)}>按钮</button>
     	</div>
   }
}
