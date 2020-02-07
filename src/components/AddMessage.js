import React from 'react';
import {connect} from 'react-redux';
import {addMessage} from '../actions';

class AddMessage extends React.Component {
	render() {
		let input;
		return (
			<section className="new-message">
				<input
					onKeyPress={e => {
						if (e.key === 'Enter') {
							this.props.addMessage(input.value, 'Me');
							input.value = '';
						}
					}}
					type="text"
					ref={node => {
						input = node;
					}}
				/>
			</section>
		);
	}
}

const mapStateToPreps = state => {
	return {
		message: state.message,
		author: state.author,
	};
};

export default connect(mapStateToPreps, {addMessage})(AddMessage);
