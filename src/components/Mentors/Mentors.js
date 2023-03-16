import './Mentors.css';
import MentorOne from '../../assets/images/mentor-one.png';
import MentorTwo from '../../assets/images/mentor-two.png';
import MentorThree from '../../assets/images/mentor-three.png';
import MentorFour from '../../assets/images/mentor-four.png';
import MentorFive from '../../assets/images/mentor-five.png';
import { EffectCoverflow, EffectFlip, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Mentors = () => {
	return (
		<section className="mentors" id="mentors">
			<div>
				<div className="container">
					<h2 className="mentors-title">Наставники</h2>
				</div>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img
							src={MentorOne}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorTwo}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorThree}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorFour}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorFive}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorTwo}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorThree}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorFour}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={MentorFive}
							width="210"
							height="300"
							alt="Mentors"
						/>
					</SwiperSlide>
				</Swiper>
				<div className="container">
					<h3 className="mentors-subtitle">
						Курс "Производство столового винограда"
					</h3>
					<div className="mentors-desc-wrapper">
						<div className="mentors-desc-subwrapper">
							<p className="mentors-desc">
								Современная программа обучения и постоянная
								поддержка экспертов-преподавателей позволит вам
								продуктивно и быстро освоить данную сферу.
							</p>
						</div>
						<div className="mentors-experience">
							<p className="mentors-experience-desc">
								Составленвиноградарями и виноделами с опытом
								работы в Узбекистане, России и Франции.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
