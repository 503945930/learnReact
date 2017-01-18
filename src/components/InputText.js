import React from 'react';

export default class InputText extends React.Component{
   doClick(){   
     var el = this.refs.meg;
     alert(el.value);
   }
   
   render(){
     return <div>
     	<input name='message' value='123' ref="meg"/>
     	<button onClick={this.doClick.bind(this)}>按钮</button>
     	</div>
   }
}
