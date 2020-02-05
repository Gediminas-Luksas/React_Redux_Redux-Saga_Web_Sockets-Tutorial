import React from 'react';
import { connect } from 'react-redux';
import { messageReceived } from '../actions';
import Messag from './Message';

const MessagesList = ({ messages }) => (
	<section className="message-list">
		<ul>{messages.map((message) => <Messag key={message.id} {...message} />)}</ul>
	</section>
);

const mapStateToProps = (state) => {
	return { messages: state.messages };
};

export default connect(mapStateToProps, { messageReceived })(MessagesList);
