import React from 'react';
import PropTypes from 'prop-types';

const NavigationBar = (props) => {
	return (
		<nav>
			<img src='./logo.png' alt='logo' />
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
