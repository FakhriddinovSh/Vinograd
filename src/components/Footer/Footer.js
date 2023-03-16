import './footer.css';
import FooterLogo from '../../assets/images/icons/footer-logo.svg';

export const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="container">
				<a className="footer-link" href="#">
					<img
						src={FooterLogo}
						width="224"
						height="87"
						alt="Site footer logo"
					/>
				</a>

				<div className="footer-wrapper">
					<ul className="m-0 p-0 list-unstyled d-flex">
						<li>
							<div>
								<nav>
									<ul className="m-0 p-0 list-unstyled">
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Porem
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Ipsum
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Dolor Sit
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Amet
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Consect
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Etur
											</a>
										</li>
									</ul>
								</nav>
								<strong className="site-footer__strong">
									КУРСЫ
								</strong>
							</div>
						</li>
						<li style={{ marginLeft: '88px' }}>
							<div>
								<strong className="site-footer__strong">
									КУРСЫ
								</strong>
								<nav className="mt-4">
									<ul className="m-0 p-0 list-unstyled">
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Porem
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Ipsum
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Dolor Sit
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Amet
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link"
												href="#"
											>
												Consect
											</a>
										</li>
										<li className="site-footer_list-item">
											<a
												className="site-footer__link m-0"
												href="#"
											>
												Etur
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</li>
						<li style={{ marginLeft: '88px' }}>
							<div>
								<strong className="site-footer__strong">
									КОНТАКТЫ
								</strong>
								<nav className="mt-4">
									<ul className="m-0 p-0 list-unstyled">
										<li className="site-footer_list-item site-footer__location-item">
											<a
												className="site-footer__link"
												href="tel:+998908141339"
											>
												+998 (90) 814 13 39
											</a>
										</li>
										<li className="site-footer_list-item site-footer__location-item">
											<div className="site-footer__location">
												<a
													className="site-footer__link"
													href="https://goo.gl/maps/mewvJuToD2PsbzCx5"
													target="blank"
												>
													Наш адрес: Абая 6А, Учебный
													центр виноградарства.
												</a>
											</div>
										</li>
									</ul>
								</nav>
							</div>
						</li>

						<li style={{ marginLeft: '32px' }}>
							<div>
								<strong className="site-footer__strong">
									ПОДПИШИТЕСЬ НА НОВОСТИ
								</strong>
								<nav className="mt-4">
									<ul className="m-0 p-0 list-unstyled">
										<li className="site-footer_list-item ">
											<form
												method="post"
												autoComplete="off"
											>
												<input
													className="site-footer__input"
													type="email"
													placeholder="ВАШ EMAIL"
													aria-label="ВАШ EMAIL"
												/>
												<button
													className="site-footer__button"
													type="submit"
												>
													ОТПРАВИТЬ
												</button>
											</form>
											<p className="site-footer__desc">
												ПОДПИШИТЕСЬ НА НАС
											</p>
											<ul className="list-unstyled m-0 p-0 d-flex align-items-center gap-4">
												<li>
													<a
														href="https://www.instagram.com/"
														target="blank"
													>
														<svg
															width="32"
															height="32"
															viewBox="0 0 32 32"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M22.6666 2.66663H9.33329C5.65139 2.66663 2.66663 5.65139 2.66663 9.33329V22.6666C2.66663 26.3485 5.65139 29.3333 9.33329 29.3333H22.6666C26.3485 29.3333 29.3333 26.3485 29.3333 22.6666V9.33329C29.3333 5.65139 26.3485 2.66663 22.6666 2.66663Z"
																stroke="white"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M21.3334 15.16C21.4979 16.2697 21.3084 17.403 20.7917 18.3987C20.275 19.3945 19.4575 20.2019 18.4555 20.7063C17.4535 21.2106 16.3179 21.3862 15.2104 21.2079C14.1029 21.0297 13.0797 20.5068 12.2865 19.7136C11.4932 18.9204 10.9703 17.8972 10.7921 16.7897C10.6139 15.6821 10.7894 14.5466 11.2938 13.5445C11.7981 12.5425 12.6056 11.725 13.6013 11.2084C14.5971 10.6917 15.7304 10.5022 16.84 10.6667C17.9719 10.8345 19.0198 11.362 19.8289 12.1711C20.6381 12.9802 21.1655 14.0281 21.3334 15.16Z"
																stroke="white"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
															<path
																d="M23.3334 8.66663H23.3467"
																stroke="white"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
													</a>
												</li>

												<li>
													<a
														href="https://www.facebook.com/"
														target="blank"
													>
														<svg
															width="18"
															height="30"
															viewBox="0 0 18 30"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M16.5833 1.66699H12.3333C10.4547 1.66699 8.65304 2.36937 7.32466 3.61961C5.99628 4.86986 5.25 6.56555 5.25 8.33366V12.3337H1V17.667H5.25V28.3337H10.9167V17.667H15.1667L16.5833 12.3337H10.9167V8.33366C10.9167 7.98004 11.0659 7.6409 11.3316 7.39085C11.5973 7.1408 11.9576 7.00033 12.3333 7.00033H16.5833V1.66699Z"
																stroke="white"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
													</a>
												</li>

												<li>
													<a
														href="https://www.twitter.com/"
														target="blank"
													>
														<svg
															width="38"
															height="34"
															viewBox="0 0 38 34"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<g filter="url(#filter0_f_588_8839)">
																<path
																	d="M32.4163 5.33332C32.4163 5.33332 31.483 8.13332 29.7496 9.86666C31.883 23.2 17.2163 32.9333 5.74963 25.3333C8.68297 25.4667 11.6163 24.5333 13.7496 22.6667C7.08297 20.6667 3.74963 12.8 7.08297 6.66666C10.0163 10.1333 14.5496 12.1333 19.083 12C17.883 6.39999 24.4163 3.19999 28.4163 6.93332C29.883 6.93332 32.4163 5.33332 32.4163 5.33332Z"
																	stroke="white"
																	stroke-width="2"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</g>
															<defs>
																<filter
																	id="filter0_f_588_8839"
																	x="-0.916992"
																	y="-4"
																	width="40"
																	height="40"
																	filterUnits="userSpaceOnUse"
																	color-interpolation-filters="sRGB"
																>
																	<feFlood
																		flood-opacity="0"
																		result="BackgroundImageFix"
																	/>
																	<feBlend
																		mode="normal"
																		in="SourceGraphic"
																		in2="BackgroundImageFix"
																		result="shape"
																	/>
																	<feGaussianBlur
																		stdDeviation="2"
																		result="effect1_foregroundBlur_588_8839"
																	/>
																</filter>
															</defs>
														</svg>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</li>
					</ul>
				</div>
				<p className="site-footer__copyright">© copyright 2023</p>
			</div>
		</footer>
	);
};
