import { CourseItem } from '../CourseItem/CourseItem';
import './Course.css';
import CourseItemOne from '../../assets/images/course-1.png';
import CourseItemTwo from '../../assets/images/course-2.png';
import { NavLink } from 'react-router-dom';

export const Course = () => {
	return (
		<section className="course" id="course">
			<div className="container text-center course-wrapper">
				<h2 className="course-title">курсы</h2>
				<ul
					className="row course-list justify-content-center"
					style={{ gap: '50px' }}
				>
					<CourseItem image={CourseItemOne} />
					<CourseItem image={CourseItemTwo} />
				</ul>
				<NavLink
					to={'/courses'}
					className="course-button  d-inline-block text-decoration-none"
				>
					Смотреть все
				</NavLink>
			</div>
		</section>
	);
};
