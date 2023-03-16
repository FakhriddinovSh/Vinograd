import { EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Modal } from '../TypeModal/TypeModal';

export const Hero = () => {
	const [modal, setModal] = useState(false);
	let [count, setCount] = useState(0);

	return (
		<div className="hero">
			<Swiper
				effect={'cube'}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				pagination={true}
				modules={[EffectCube, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="container">
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<div className="content-wrapper">
								<div>
									<h2 className="hero-title">
										Учебный центр
									</h2>
									<span className="hero-title title-piece">
										Виноградарства!
									</span>
								</div>
								<button
									onClick={() => setModal(true)}
									className="hero-btn"
								>
									Купить
								</button>
							</div>
							<div className="hero-right">
								<ul className="hero-right-list">
									<li className="hero-right-item">
										<p className="hero-right-desc">
											20 марта
										</p>
									</li>
									<li className="hero-right-item">
										<p className="hero-right-desc">13:00</p>
									</li>
									<li className="hero-right-item">
										<p className="hero-right-desc">
											Наш адрес: Абая 6А, Учебный центр
											виноградарства.
										</p>
									</li>
								</ul>
								<p className="hero-right-cost">700.000 сум</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<div className="content-wrapper">
								<div>
									<h2 className="hero-title">
										Учебный центр
									</h2>
									<span className="hero-title title-piece">
										Виноградарства!
									</span>
								</div>
								<button
									onClick={() => setModal(true)}
									className="hero-btn"
								>
									Купить
								</button>
							</div>
							<div className="hero-right">
								<ul className="hero-right-list">
									<li className="hero-right-item">
										<p className="hero-right-desc">
											20 марта
										</p>
									</li>
									<li className="hero-right-item">
										<p className="hero-right-desc">13:00</p>
									</li>
									<li className="hero-right-item">
										<p className="hero-right-desc">
											Наш адрес: Абая 6А, Учебный центр
											виноградарства.
										</p>
									</li>
								</ul>
								<p className="hero-right-cost">700.000 сум</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="container">
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<div className="content-wrapper">
								<div>
									<h2 className="hero-title">
										Учебный центр
									</h2>
									<span className="hero-title title-piece">
										Виноградарства!
									</span>
								</div>
								<button
									onClick={() => setModal(true)}
									className="hero-btn"
								>
									Купить
								</button>
							</div>
							<div className="hero-right">
								<ul className="hero-right-list">
									<li className="hero-right-item">
										<p className="hero-right-desc">
											20 марта
										</p>
									</li>
									<li className="hero-right-item">
										<p className="hero-right-desc">13:00</p>
									</li>
									<li className="hero-right-item">
										<p className="hero-right-desc">
											Наш адрес: Абая 6А, Учебный центр
											виноградарства.
										</p>
									</li>
								</ul>
								<p className="hero-right-cost">700.000 сум</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>

			<Modal modal={modal}>
				<div className="modal-wrapper">
					<div
						className="d-flex justify-content-between aligin-items-center"
						style={{ marginBottom: '19px' }}
					>
						<h2 className="modal-title">Worem ipsum dolor sit </h2>
						<button
							onClick={() => setModal(false)}
							className="modal-close"
						></button>
					</div>
					<form>
						<div className="d-flex justify-content-between">
							<div style={{ width: '402px' }}>
								<div className="d-flex flex-column">
									<input
										className="modal-input"
										type="text"
										placeholder="имя"
										aria-label="имя"
									/>
									<input
										className="modal-input"
										type="text"
										placeholder="Фамилия"
										aria-label="Фамилия"
									/>
									<input
										className="modal-input"
										type="tel"
										placeholder="Номер телефона"
										aria-label="Номер телефона"
									/>
									<input
										className="modal-input"
										type="email"
										placeholder="email"
										aria-label="email"
									/>

									<div className="d-flex flex-row-reverse justify-content-between ">
										<label
											className="modal-label"
											htmlFor="must"
										>
											Worem ipsum{' '}
											<span style={{ color: '#D22630' }}>
												dolor sit amet, consectetur
												adipiscing elit.
											</span>
										</label>
										<input
											className="checkbox-modal"
											type="checkbox"
											id="must"
										/>
									</div>
								</div>
							</div>
							<div style={{ width: '458px' }}>
								<div className="d-flex justify-content-between">
									<p className="modal-right-title">цена</p>
									<p className="modal-right-title">
										200.000 сум
									</p>
								</div>
								<div
									className="d-flex justify-content-between align-items-center"
									style={{ margin: '15px 0' }}
								>
									<p
										style={{ paddingTop: '10px' }}
										className="modal-right-title"
									>
										Кол-во
									</p>
									<div className="d-flex align-items-center">
										<button
											onClick={() => {
												if (count !== 0) {
													setCount(count--);
												}
											}}
											className="decrement count"
										>
											-
										</button>
										<input
											className="count-input"
											type="text"
											disabled
											value={count}
										/>
										<button
											onClick={() => setCount(count++)}
											className="increment count"
										>
											+
										</button>
									</div>
								</div>
								<input
									className="modal-right-input"
									type="text"
									placeholder="200.000 сум"
									aria-label="200.000 сум"
								/>
								<input
									className="modal-right-input"
									type="text"
									placeholder="номер карты"
									aria-label="номер карты"
								/>
								<input
									className="modal-right-input"
									type="text"
									placeholder=""
									aria-label=""
								/>
								<div className="d-flex">
									<input
										style={{ marginRight: '20px' }}
										className="modal-right-input"
										type="text"
										placeholder="срок дейст."
										aria-label="срок дейст."
									/>
									<input
										className="modal-right-input"
										type="text"
										placeholder="cvc/cw"
										aria-label="cvc/cw"
									/>
								</div>
								<button className="modal-submit" type="submit">
									оплатить
								</button>
							</div>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	);
};
