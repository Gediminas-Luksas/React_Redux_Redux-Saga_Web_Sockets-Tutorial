import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import MessageList from '../components/MessageList';
import AddMessage from '../components/AddMessage';

const App = () => {
	return (
		<div className="container">
			<Sidebar />
			<section className="main">
				<MessageList />
				<AddMessage />
			</section>
		</div>
	);
};

export default App;
