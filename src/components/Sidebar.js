import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions';

const Sidebar = ({users}) => (
	<aside id="sidebar" className="sidebar">
		<ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
	</aside>
);

const mapStateToProps = state => {
	return {users: state.users};
};

export default connect(mapStateToProps, {addUser})(Sidebar);
