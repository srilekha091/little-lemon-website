import React from 'react';
import './BookingPage.css';

const BookingPage = () => {
	return (
		<div className='reservationForm'>
			<form>
				<div className='reservationForm-modal'>
					<h2 className='reservation-title'>Reservation Form</h2>
					<div className='field'>
						<label htmlFor='first'>First Name: </label>
						<input
							type='text'
							id='first'
							name='first'
							placeholder='Enter your name'
							required
						/>
					</div>
					<div className='field'>
						<label htmlFor='last'>Last Name: </label>
						<input
							type='text'
							id='last'
							name='last'
							placeholder='Enter your name'
						/>
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
						<button type='submit' className='reserve-submitBtn'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BookingPage;
