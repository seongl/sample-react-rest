"use strict";

var React = require('react');

var ButtonComponent = React.createClass({
	handleClick: function() {
		this.props.onButtonSelected();
	},
	render: function() {
		return (
			<div>
				<button className="btn btn-default btn-lg" onClick={this.handleClick}
						disabled={this.props.counter > 21}>
					Next
				</button>
			</div>
		);
	}
});

module.exports = ButtonComponent;