import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ toggleForm }) => {
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
						<label htmlFor='booking_date'>Choose time: </label>
						<select>
							<option>17:00</option>
							<option>18:00</option>
							<option>19:00</option>
							<option>20:00</option>
							<option>21:00</option>
							<option>22:00</option>
						</select>
					</div>
					<div className='field'>
						<label htmlForfor='occasion'>Occasion: </label>
						<select id='occasion'>
							<option>Birthday</option>
							<option>Anniversary</option>
						</select>
					</div>
					<div>
						<button
							type='submit'
							className='reserve-submitBtn'
							disabled={!getIsFormValid()}
							value='Make Your reservation'
						>
							Make Your reservation
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

export default BookingForm;
