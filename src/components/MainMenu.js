import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
	return (
		<section className='section'>
			<article className='sub-section'>
				<h1>Our Menu</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				</p>
				<p>See our new menu</p>
			</article>
			<article className='sub-section'>
				<h1>Book a table</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				</p>
				<p>Book your table</p>
			</article>
			<article className='sub-section'>
				<h1>Opening Hours</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				</p>
				<ul className='openHours'>
					<li>Mon - Fri: 10AM - 2PM</li>
					<li>Sat: 10AM - 5PM</li>
					<li>Sun: Closed</li>
				</ul>
			</article>
		</section>
	);
};

export default MainMenu;
