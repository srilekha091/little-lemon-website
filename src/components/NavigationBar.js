import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
	return (
		<nav className='navHeader'>
			{/* <img src='./asset.png' alt='logo'></img> */}
			<ul>
				<li>
					<a href='/home'>Home</a>
				</li>
				<li>
					<a href='/about'>About</a>
				</li>
				<li>
					<a href='/reservations'>Reservations</a>
				</li>
				<li>
					<a href='/order'>Order Online</a>
				</li>
				<li>
					<a href='/login'>Login</a>
				</li>
			</ul>
		</nav>
	);
};

NavigationBar.propTypes = {};

export default NavigationBar;
