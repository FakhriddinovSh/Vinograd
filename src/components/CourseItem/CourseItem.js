import './CourseItem.css';

export const CourseItem = ({ image }) => {
	return (
		<li className="col-4 course-item text-start mb-3">
			<img
				className="course-item-image"
				src={image}
				width="349"
				height="324"
				alt="Course image"
			/>
			<div className="d-flex">
				<h3 className="course-item-title">Курсы Официанта</h3>
				<p className="course-count">06</p>
			</div>
			<p className="course-item-desc">
				Мы поможем вам получить все самые важные и необходимые знания в
				данной сфере деятельности!
			</p>
		</li>
	);
};
