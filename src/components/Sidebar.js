import React from 'react';
import { connect } from 'react-redux';
import { populateUsersList, addUser } from '../actions';

class Sidebar extends React.Component {
	componentDidMount() {
		this.props.addUser('oTukas');
	}

	render() {
		return (
			<aside className="sidebar">
				<ul>{this.props.users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
			</aside>
		);
	}
}

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, { populateUsersList, addUser })(Sidebar);
