import './target.css';
import TargetOne from '../../assets/images/target-one.png';
import TargetTwo from '../../assets/images/target-two.png';
import TargetThree from '../../assets/images/target-three.png';
import TargetFour from '../../assets/images/target-four.png';

export const Target = () => {
	return (
		<section className="target">
			<div className="container">
				<h2 className="target-title">
					Миссия и цели Учебного центра Виноградарства!
				</h2>
				<ul className="row target-list justify-content-between">
					<li className="col-8">
						<img
							src={TargetOne}
							width="804"
							height="482"
							alt="Vinograd"
						/>
					</li>
					<li className="col-4">
						<img
							src={TargetTwo}
							width="392"
							height="482"
							alt="Vinograd"
						/>
					</li>
					<li className="col-6">
						<img
							src={TargetThree}
							width="677"
							height="485"
							alt="Vinograd"
							style={{
								width: '100%',
								height: '485px',
								marginTop: '15px',
							}}
						/>
					</li>
					<li className="col-6">
						<img
							src={TargetFour}
							width="519"
							height="485"
							alt="Vinograd"
							style={{
								width: '100%',
								height: '485px',
								marginTop: '15px',
							}}
						/>
					</li>
				</ul>
				<div className="target-blue">
					<p>
						Улучшить развитие отрасли виноградарства в Узбекистане.
						﻿﻿Повышение качества обслуживания и культуры пития;
						Развитие барного искусства и барной индустрии;
						﻿﻿Разработка и реализация новых более качественных
						правил и стандартов профессиональной деятельности
						барменов, официантов и других работников индустрии
						гостеприимства;
					</p>
				</div>
				<div className="target-red">
					<p>
						Впервые в Узбекистане, наиболее полная программа о
						виноделии нашей страны, который познакомит вас с
						историей и современным развитием виноделия Узбекистана!
						Откройте для себя мир виноградарство, вместе с нами
					</p>
				</div>
			</div>
		</section>
	);
};
