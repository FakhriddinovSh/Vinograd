import React from 'react';
import { CourseAll } from '../../components/CourseAll/CourseAll';
import { CourseHero } from '../../components/CourseHero/CourseHero';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { HeaderHero } from '../../components/HeaderHero/HeaderHero';

export const CoursePage = () => {
	return (
		<>
			<div style={{ background: '#78D64A', paddingBottom: '20px' }}>
				<Header />
			</div>
			<main>
				<CourseHero />
				<CourseAll />
			</main>
			<Footer />
		</>
	);
};
