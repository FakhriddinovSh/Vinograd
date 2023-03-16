import React from 'react';
import './calendareven.css';

export const CalendarEven = ({ date, name }) => {
	return (
		<div className="even-wrapper">
			<span>{date}</span>
			<p>{name}</p>
		</div>
	);
};
