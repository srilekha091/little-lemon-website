import React, { useReducer } from 'react';

const ToDo = () => {
	const initialState = [];

	function reducer(state, action) {
		switch (action.type) {
			case 'Add':
				return [
					...state,
					{
						id: state.length + 1,
						name: action.payload,
					},
				];
			case 'DEL':
				return state.filter((i) => i.id !== action.payload);
			default:
				return state;
		}
	}

	const [todos, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>ToDO List</h1>
			<input
				type='text'
				placeholder='Add Todos'
				onBlur={(e) => dispatch({ type: 'Add', payload: e.target.value })}
			/>
			<hr />
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							{todo.name}

							<span>
								<button
									onClick={() => dispatch({ type: 'DEL', payload: todo.id })}
								>
									DELETE
								</button>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ToDo;
