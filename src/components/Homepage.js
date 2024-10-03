import React, { useState } from 'react';
import './Homepage.css';
import BookingPage from './BookingPage';

const Homepage = () => {
	const [showform, setShowform] = useState(false);

	const toggleForm = () => {
		setShowform(!showform);
	};
	return (
		<div className='Homepage'>
			<div className='homePageIntro'>
				<h1 className='homepage-title'>Little Lemon</h1>
				<h3 className='subTitle'>Chicago</h3>
				<p className='description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua
				</p>
				<button className='reserveBtn' onClick={toggleForm}>
					Reserve a table
				</button>
			</div>
			{showform && <BookingPage toggleForm={toggleForm} />}
		</div>
	);
};

export default Homepage;
