import { Route, Routes } from 'react-router-dom';
import './app.css';
import { About } from './components/About/About';
import { Course } from './components/Course/Course';
import { CourseItem } from './components/CourseItem/CourseItem';
import { Footer } from './components/Footer/Footer';
import { HeaderHero } from './components/HeaderHero/HeaderHero';
import { Mentors } from './components/Mentors/Mentors';
import { Target } from './components/Target/Target';
import { Calendar } from './pages/Calendar/Calendar';
import { CoursePage } from './pages/CoursePage/CoursePage';
import { Home } from './pages/Home/Home';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses/*" element={<CoursePage />} />
				<Route path="/calendar/*" element={<Calendar />} />
			</Routes>
		</>
	);
};
