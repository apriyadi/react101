var React = require('react');

var Repos = React.createClass({
	render: function() {
		return (
			<div> 
				<p>REPOSSS:</p>
				<p>{this.props.repos}</p>
			</div>
		)
	}
});

module.exports = Repos;