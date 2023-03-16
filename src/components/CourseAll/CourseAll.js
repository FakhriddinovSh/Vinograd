import { NavLink } from 'react-router-dom';
import './CourseAll.css';
import { CourseItem } from '../CourseItem/CourseItem';
import CourseImageOne from '../../assets/images/course-1.png';
import CourseImageTwo from '../../assets/images/course-2.png';

export const CourseAll = () => {
	return (
		<div>
			<div className="container">
				<h2 className="course-all-title">все курсы</h2>
				<ul className="list-unstyled m-0 p-0 d-flex course-all-list">
					<li className="course-all-item">
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'course-all-link course-all-link--active'
									: 'course-all-link'
							}
							to={'popular'}
						>
							популярное
						</NavLink>
					</li>
					<li className="course-all-item">
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'course-all-link course-all-link--active'
									: 'course-all-link'
							}
							to={'lessons'}
						>
							уроки
						</NavLink>
					</li>
					<li className="course-all-item">
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'course-all-link course-all-link--active'
									: 'course-all-link'
							}
							to={'testing'}
						>
							дегустация
						</NavLink>
					</li>
					<li className="course-all-item">
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'course-all-link course-all-link--active'
									: 'course-all-link'
							}
							to={'testing-2'}
						>
							дегустация
						</NavLink>
					</li>
				</ul>
				<ul className="list-unstyled m-0 p-0 row">
					<CourseItem image={CourseImageOne} />
					<CourseItem image={CourseImageTwo} />
					<CourseItem image={CourseImageOne} />
					<CourseItem image={CourseImageTwo} />
					<CourseItem image={CourseImageTwo} />
					<CourseItem image={CourseImageTwo} />
				</ul>
			</div>
		</div>
	);
};
