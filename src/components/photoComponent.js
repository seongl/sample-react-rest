"use strict";

var React = require('react');

var PhotoComponent = React.createClass({
	render: function() {
		return (
			<div>
				<img src={"http://localhost:3000/api/Photos/" + this.props.id} width="80" />
			</div>
		);
	}
});

module.exports = PhotoComponent;