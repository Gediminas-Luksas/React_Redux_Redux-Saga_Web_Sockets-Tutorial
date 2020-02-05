import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
	switch (action.type) {
		case types.ADD_MESSAGES:
		case types.MESSAGE_RECEIVER:
			return state.concat([
				{
					message: action.message,
					author: action.author,
					id: action.id,
				},
			]);
		default:
			return state;
	}
};

export default messages;
