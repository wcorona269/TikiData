// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount, increment, decrement } from '../../reducers/counter_reducer';

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count)
	
	return (
		<div>
			<p>
				The count is {count}
			</p>
			<button onClick={() => dispatch(increment())}>increment</button>
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<button onClick={() => dispatch(incrementByAmount(33))}>increment by 33</button>
		</div>
	)

}

export default Counter