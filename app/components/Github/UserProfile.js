var React = require('react');

var UserProfiles = React.createClass({
	render: function() {
		return (
			<div> 
				<p>USER PROFILES </p>
				<p>Username is: {this.props.username}</p>
				<p>Bio is: {this.props.bio.name}</p>
			</div>
		)
	}
});

module.exports = UserProfiles;