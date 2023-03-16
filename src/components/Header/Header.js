import { NavLink } from 'react-router-dom';
import './header.css';
import SiteLogo from '../../assets/images/icons/logo (1).svg';
import SearchIcon from '../../assets/images/icons/search-icon.svg';
import CalendarIcon from '../../assets/images/icons/calendar-icon.svg';

export const Header = () => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="site-header__wrapper">
					<NavLink to={'/'}>
						<img
							src={SiteLogo}
							width="166"
							height="63"
							alt="sitelogo"
						/>
					</NavLink>
					<nav>
						<ul className="site-header__list position-relative">
							<li>
								<img
									src={SearchIcon}
									width="26"
									height="26"
									alt="Search icon"
								/>
							</li>
							<li className=" site-header__item">
								<a className="site-header__link" href="#course">
									КУРСЫ
								</a>
							</li>
							<li>
								<a className="site-header__link" href="#about">
									о нас
								</a>
							</li>
							<li>
								<a className="site-header__link" to="#contact">
									КОНТАКТЫ
								</a>
							</li>
							<li>
								<NavLink
									to={'/calendar'}
									className="header-button text-decoration-none"
								>
									<img
										src={CalendarIcon}
										width="26"
										height="26"
										alt="Calendar icon"
									/>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
