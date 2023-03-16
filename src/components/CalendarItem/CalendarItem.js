import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CalendarEven } from '../CalendarEven/CalendarEven';
import { CalendarEventsEvenjs } from '../CalendarEventsEven/CalendarEventsEven';
import { CalendarEventsOdd } from '../CalendarEventsOdd/CalendarEventsOdd.js';
import { CalendarOdd } from '../CalendarOdd/CalendarOdd';
import './calendaritem.css';

export const CalendarItem = () => {
	const [modal, setModal] = useState(false);

	const MenuWrapper = styled.div`
		display: ${(props) => (props.modal === true ? 'block' : 'none')};
		width: 415px;
		top: 85px;
		left: 0;
		padding-top: 14px;
		padding-left: 86px;
		padding-right: 16px;
		padding-bottom: 184px;
		z-index: 1;
		background-color: #78d64a;
	`;

	return (
		<div className="container">
			<MenuWrapper modal={modal} className="position-absolute ">
				<button
					onClick={() => setModal(false)}
					className="menu-btn"
				></button>
				<div className="menu-wrapper">
					<button className="calendar-filter">фильтр</button>
					<form>
						<div className="menu-form-inner">
							<input
								className="menu-checkbox-input"
								type="checkbox"
								name="user_check"
								id="checkbox"
							/>
							<label
								className="menu-checkbox-label"
								htmlFor="checkbox"
							>
								Worem ipsum{' '}
							</label>
						</div>
						<div className="menu-form-inner">
							<input
								className="menu-checkbox-input"
								type="checkbox"
								name="user_check"
								id="checkbox"
							/>
							<label
								className="menu-checkbox-label"
								htmlFor="checkbox"
							>
								Worem ipsum{' '}
							</label>
						</div>
						<div className="menu-form-inner">
							<input
								className="menu-checkbox-input"
								type="checkbox"
								name="user_check"
								id="checkbox"
							/>
							<label
								className="menu-checkbox-label"
								htmlFor="checkbox"
							>
								Worem ipsum{' '}
							</label>
						</div>
						<div className="menu-form-inner">
							<input
								className="menu-checkbox-input"
								type="checkbox"
								name="user_check"
								id="checkbox"
							/>
							<label
								className="menu-checkbox-label"
								htmlFor="checkbox"
							>
								Worem ipsum{' '}
							</label>
						</div>
						<div className="menu-form-inner">
							<input
								className="menu-checkbox-input"
								type="checkbox"
								name="user_check"
								id="checkbox"
							/>
							<label
								className="menu-checkbox-label"
								htmlFor="checkbox"
							>
								Worem ipsum
							</label>
						</div>
						<div className="menu-form-inner">
							<input
								className="menu-checkbox-input"
								type="checkbox"
								name="user_check"
								id="checkbox"
							/>
							<label
								className="menu-checkbox-label"
								htmlFor="checkbox"
							>
								Worem ipsum{' '}
							</label>
						</div>
						<div className="mt-5">
							<strong
								className="text-uppercase"
								style={{
									'font-weight': '600',
									'font-size': '24px',
									'line-height': '27px',
									'letter-spacing': '-0.35px',
									color: '#414141',
								}}
							>
								время
							</strong>
							<div className="menu-form-inner">
								<input
									className="menu-checkbox-time"
									type="text"
									name="user_check"
									id="checkbox"
									placeholder="12:02"
								/>
							</div>
						</div>

						<div className="mt-5">
							<strong
								className="text-uppercase"
								style={{
									'font-weight': '600',
									'font-size': '24px',
									'line-height': '27px',
									'letter-spacing': '-0.35px',
									color: '#414141',
								}}
							>
								Место
							</strong>
							<div className="menu-form-inner">
								<input
									className="menu-checkbox-input"
									type="checkbox"
									name="user_check"
									id="checkbox"
								/>
								<label
									className="menu-checkbox-label"
									htmlFor="checkbox"
								>
									Worem ipsum{' '}
								</label>
							</div>
							<div className="menu-form-inner">
								<input
									className="menu-checkbox-input"
									type="checkbox"
									name="user_check"
									id="checkbox"
								/>
								<label
									className="menu-checkbox-label"
									htmlFor="checkbox"
								>
									Worem ipsum{' '}
								</label>
							</div>
							<div className="menu-form-inner">
								<input
									className="menu-checkbox-input"
									type="checkbox"
									name="user_check"
									id="checkbox"
								/>
								<label
									className="menu-checkbox-label"
									htmlFor="checkbox"
								>
									Worem ipsum{' '}
								</label>
							</div>
							<div className="menu-form-inner">
								<input
									className="menu-checkbox-input"
									type="checkbox"
									name="user_check"
									id="checkbox"
								/>
								<label
									className="menu-checkbox-label"
									htmlFor="checkbox"
								>
									Worem ipsum{' '}
								</label>
							</div>
						</div>

						<div className="mt-5">
							<strong
								className="text-uppercase"
								style={{
									'font-weight': '600',
									'font-size': '24px',
									'line-height': '27px',
									'letter-spacing': '-0.35px',
									color: '#414141',
								}}
							>
								время
							</strong>
							<div className="menu-form-inner">
								<input
									className="menu-checkbox-time"
									type="text"
									name="user_check"
									id="checkbox"
									placeholder="12:02"
								/>
							</div>
						</div>

						<button className="menu-submit" type="submit">
							готово
						</button>
					</form>
				</div>
			</MenuWrapper>

			<div className="calendar-top-wrapper">
				<button
					onClick={() => setModal(true)}
					className="calendar-filter"
				>
					фильтр
				</button>
				<NavLink className="calendar-date" to={'date'}>
					февраль, 2023
				</NavLink>
			</div>

			<ul className="list-unstyled m-0 p-0 event-list">
				<li className="row events-item">
					<div className="col-4">
						<CalendarOdd date="06" name={'понедельник'} />
					</div>
					<div className="col-4">
						<CalendarEventsOdd />
					</div>
					<div className="col-4">
						<CalendarEventsOdd />
					</div>
				</li>
				<li className="row events-item">
					<div className="col-4">
						<CalendarEven date="06" name={'понедельник'} />
					</div>
					<div className="col-4">
						<CalendarEventsEvenjs />
					</div>
					<div className="col-4">
						<CalendarEventsEvenjs />
					</div>
				</li>
				<li className="row events-item">
					<div className="col-4">
						<CalendarOdd date="06" name={'понедельник'} />
					</div>
					<div className="col-4">
						<CalendarEventsOdd />
					</div>
					<div className="col-4">
						<CalendarEventsOdd />
					</div>
				</li>
				<li className="row events-item">
					<div className="col-4">
						<CalendarEven date="06" name={'понедельник'} />
					</div>
					<div className="col-4">
						<CalendarEventsEvenjs />
					</div>
					<div className="col-4">
						<CalendarEventsEvenjs />
					</div>
				</li>
				<li className="row events-item">
					<div className="col-4">
						<CalendarOdd date="06" name={'понедельник'} />
					</div>
					<div className="col-4">
						<CalendarEventsOdd />
					</div>
					<div className="col-4">
						<CalendarEventsOdd />
					</div>
				</li>
				<li className="row events-item">
					<div className="col-4">
						<CalendarEven date="06" name={'понедельник'} />
					</div>
					<div className="col-4">
						<CalendarEventsEvenjs />
					</div>
					<div className="col-4">
						<CalendarEventsEvenjs />
					</div>
				</li>
			</ul>
		</div>
	);
};
