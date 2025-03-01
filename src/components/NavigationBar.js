import React from 'react';
import './NavigationBar.css';
import logo from '../Images/banner.png';
import { Route, Routes, Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import Homepage from './Homepage';

const NavigationBar = () => {
	return (
		<div className='linkDiv'>
			<nav className='navHeader'>
				<div className='logoDiv'>
					<img src={logo} alt='logo' id='logo' />
				</div>
				<Link to='/' className='nav-item'>
					Home
				</Link>
				<Link to='/main-menu' className='nav-item'>
					Menu
				</Link>
				<Link to='/reserve' className='nav-item'>
					Book
				</Link>
				<Link to='/about' className='nav-item'>
					About
				</Link>
			</nav>
			<Routes>
				<Route path='/home-page' element={<Homepage />} />
				<Route path='/main-menu' element={<MainMenu />} />
			</Routes>
		</div>
	);
};

NavigationBar.propTypes = {};

export default NavigationBar;
