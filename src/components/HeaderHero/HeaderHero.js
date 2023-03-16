import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import './headerhero.css';

export const HeaderHero = () => {
	return (
		<div className="header-hero-wrapper">
			<Header />
			<Hero />
		</div>
	);
};
