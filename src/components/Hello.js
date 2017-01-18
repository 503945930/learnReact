import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
	render: function() {
		return <p > {this.props.text} < /p>;
	}
});

module.exports = Hello;