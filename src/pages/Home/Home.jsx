import React from 'react';
import { About } from '../../components/About/About';
import { Course } from '../../components/Course/Course';
import { Footer } from '../../components/Footer/Footer';
import { HeaderHero } from '../../components/HeaderHero/HeaderHero';
import { Mentors } from '../../components/Mentors/Mentors';
import { Target } from '../../components/Target/Target';

export const Home = () => {
	return <div>
		<HeaderHero />
			<main>
				<Course />
				<About />
				<Mentors />
				<Target />
			</main>
			<Footer />
	</div>;
};
