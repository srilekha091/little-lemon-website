import React from 'react';
import './NavigationBar.css';
import logo from '../Images/banner.png';
import { Route, Routes } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<nav className='navHeader'>
			{/* <div className='logoDiv'>
				<img src={logo} alt='logo' id='logo' />
			</div> */}
			<div className='linkDiv'>
				<ul>
					<li>
						<img src={logo} alt='logo' id='logo' />
					</li>
					<li>
						<a href='/home'>Home</a>
					</li>
					<li>
						<a href='/about'>Menu</a>
					</li>
					<li>
						<a href='/reservations'>Book</a>
					</li>
					<li>
						<a href='/order'>About</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

NavigationBar.propTypes = {};

export default NavigationBar;
