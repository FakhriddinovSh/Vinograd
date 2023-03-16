import React from 'react';
import { CalendarItem } from '../../components/CalendarItem/CalendarItem';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import '../../components/CalendarItem/calendaritem.css';
import { Route, Routes } from 'react-router-dom';
import { Mentors } from '../../components/Mentors/Mentors';
import { Splanner } from '../../components/Splanner/Splanner';

export const Calendar = () => {
	return (
		<>
			<div style={{ background: '#78D64A', paddingBottom: '20px' }}>
				<Header />
			</div>
			<main>
				<h2 className="calendar-title">Календарь</h2>
				<Routes>
					<Route path="/*" element={<CalendarItem />} />
					<Route path="/date" element={<Splanner />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};
