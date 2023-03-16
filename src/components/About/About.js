import './about.css';
import AboutImage from '../../assets/images/about-image.png';
import { EffectFlip, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export const About = () => {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about-wrapper position-relative">
					<h2 className="about-title">о нас</h2>
					<div className="about-content-wrapper">
						<h3 className="about-subtitle">
							Учебный центр Виноградства
						</h3>
						<p className="about-desc">
							Это уникальный образовательный проект, созданный для
							тех, кто хочет построить серьезную карьеру в винной
							индустрии, повысить свою квалификацию или просто
							получить базовые знания о вине, чтобы испытывать еще
							больше удовольствия от благородного напитка и
							самостоятельно выбирать хорошее в ресторане или
							супермаркете.
						</p>
					</div>

					<Swiper
						effect={'flip'}
						grabCursor={true}
						pagination={true}
						navigation={true}
						modules={[EffectFlip, Pagination, Navigation]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img
								className="about-image"
								src={AboutImage}
								width="657"
								height="850"
								alt="About Image"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="about-image"
								src={AboutImage}
								width="657"
								height="850"
								alt="About Image"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="about-image"
								src={AboutImage}
								width="657"
								height="850"
								alt="About Image"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="about-image"
								src={AboutImage}
								width="657"
								height="850"
								alt="About Image"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="about-image"
								src={AboutImage}
								width="657"
								height="850"
								alt="About Image"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="about-image"
								src={AboutImage}
								width="657"
								height="850"
								alt="About Image"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};
