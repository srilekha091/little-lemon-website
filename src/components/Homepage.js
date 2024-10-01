import React from 'react';
import './Homepage.css';
import BookingPage from './BookingPage';
import logo from '../Images/logo.png';

const Homepage = () => {
	const reserveATable = () => {
		//console.log('Reserve a Table');
		return <BookingPage />;
	};
	return (
		<div className='Homepage'>
			<div className='homePageIntro'>
				<h1 className='title'>Little Lemon</h1>
				<h3 className='subTitle'>Chicago</h3>
				<p className='description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua
				</p>
				<button className='reserveBtn' onClick={reserveATable}>
					Reserve a table
				</button>
			</div>
			{/* <div className='homePagePic'>
				<img src={logo} alt='pic' />
			</div> */}
		</div>
	);
};

export default Homepage;
