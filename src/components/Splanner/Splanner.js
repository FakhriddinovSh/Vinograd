import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './splanner.css';

export const Splanner = () => {
	const [value, onChange] = useState(new Date());

	return (
		<div>
			<div className="container">
				<Calendar
					className="splanner"
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	);
};
