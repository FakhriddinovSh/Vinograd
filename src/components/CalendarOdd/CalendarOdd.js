import React from 'react';
import './calendarOdd.css';

export const CalendarOdd = ({ date, name }) => {
	return (
		<div className="odd-wrapper">
			<span>{date}</span>
			<p>{name}</p>
		</div>
	);
};
