"use strict";

var React = require('react');

var PhotoComponent = require('./photoComponent');
var ButtonComponent = require('./buttonComponent');

var PhotoFeedComponent = React.createClass({
	getInitialState: function() {
		return {ids: ['1', '2', '3', '4', '5', '6', '7'],
		counter: 8};
	},
	handleButtonSelected: function() {
		var tempArray = [];
		var temp = this.state.counter;

		for(var i = 0; i < 7; ++i) {
			tempArray.push(temp + i);
		}

		this.setState({ids: this.state.ids.concat(tempArray)});
		this.setState({counter: this.state.counter + 7});
	},
	render: function() {
		var photos = this.state.ids.map(function(id) {
			return (<PhotoComponent id={id} />);
		});
		return (
			<div className="jumbotron">
				<h1>Photo Feed</h1>
				{photos}
				<ButtonComponent onButtonSelected={this.handleButtonSelected} 
						counter={this.state.counter} />
			</div>
		);
	}
});

module.exports = PhotoFeedComponent;