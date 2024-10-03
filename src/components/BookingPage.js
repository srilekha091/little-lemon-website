import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = ({ toggleForm }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const getIsFormValid = () => {
		return firstName && lastName;
	};

	const clearForm = () => {
		setFirstName('');
		setLastName('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Reservation made successfully');
		clearForm();
	};

	return (
		<div className='reservationForm'>
			<form onSubmit={handleSubmit}>
				<div className='reservationForm-modal'>
					<h2 className='reservation-title'>Reservation Form</h2>
					<div className='field'>
						<label htmlFor='first'>First Name: </label>
						<input
							type='text'
							id='first'
							name='first'
							placeholder='Enter your name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
					<div className='field'>
						<label htmlFor='last'>Last Name: </label>
						<input
							type='text'
							id='last'
							name='last'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder='Enter your name'
						/>
					</div>
					<div className='field'>
						<label htmlFor='email'>Email: </label>
						<input type='email' id='email' required />
					</div>
					<div className='field'>
						<label htmlFor='partySize'>Number of people: </label>

						<input type='range' id='partySize' minLength={1} maxLength={8} />
					</div>
					<div className='field'>
						<label htmlFor='booking_date'>Date of booking: </label>
						<input type='date' id='booking_date' name='booking_date'></input>
					</div>
					<div>
						<button
							type='submit'
							className='reserve-submitBtn'
							disabled={!getIsFormValid()}
						>
							Submit
						</button>
						<button
							type='button'
							className='reserve-submitBtn'
							onClick={toggleForm}
						>
							Close
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BookingPage;
