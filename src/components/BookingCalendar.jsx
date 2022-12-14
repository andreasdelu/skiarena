import React, { useEffect, useState } from "react";
import { useRef } from "react";

import arrow from "../assets/images/Arrow.svg";
import Loading from "./Loading";

export default function BookingCalendar({ bookingData, prices }) {
	const [timesDefault, setTimesDefault] = useState(bookingData.timesDefault);
	const [currentDate] = useState({
		milliseconds: Date.now(),
		day: new Date().getDate(),
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	});
	const [currentMonth, setCurrentMonth] = useState(currentDate.month);
	const [currentYear, setCurrentYear] = useState(currentDate.year);

	const [daysInMonth, setDaysInMonth] = useState(
		getAllDaysInMonth(currentDate.year, currentDate.month)
	);

	const [selectedDay, setSelectedDay] = useState(0);
	const [selectedTime, setSelectedTime] = useState(0);
	const [timeSelect, setTimeSelect] = useState(false);
	const [confirmBooking, setConfirmBooking] = useState(false);
	const [bookingLoading, setBookingLoading] = useState(false);
	const [bookingDone, setBookingDone] = useState(false);

	const [reservationMessage, setReservationMessage] = useState(
		bookingData?.reservation
	);

	const timeOverlayRef = useRef(null);

	const [choices, setChoices] = useState({
		date: "",
		time: "",
	});

	const months = [
		"Januar",
		"Februar",
		"Marts",
		"April",
		"Maj",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"December",
	];

	useEffect(() => {
		setDaysInMonth(getAllDaysInMonth(currentYear, currentMonth));
	}, [currentYear, currentMonth]);

	function setTimeToday() {
		setCurrentMonth(currentDate.month);
		setCurrentYear(currentDate.year);
	}

	function getAllDaysInMonth(year, month) {
		const date = new Date(year, month, 1);

		const dates = [];
		for (let i = 0; i < 31; i++) {
			if (date.getMonth() === month) {
				let dateObject = {
					id:
						date.getDate() +
						"-" +
						(parseInt(date.getMonth()) + 1) +
						"-" +
						date.getFullYear(),
					day: date.getDate(),
					name: date.toLocaleDateString("da-DK", { weekday: "short" }),
					month: date.getMonth(),
					year: date.getFullYear(),
					season: "low",
					times: JSON.parse(JSON.stringify(timesDefault)),
					hasBooked: false,
					fullyBooked: false,
				};
				if (month === 11 && date.getDate() >= 24) {
					dateObject.season = "high";
				}
				if (month === 0) {
					dateObject.season = "high";
				}
				if (month === 1 && date.getDate() <= 20) {
					dateObject.season = "high";
				}

				for (const booked of bookingData.timesBooked) {
					if (booked.date === dateObject.id) {
						dateObject.times[booked.time].reserved.amount = booked.reserved;
						dateObject.hasBooked = true;
						for (const time of dateObject.times) {
							if (time.reserved.amount >= time.reserved.max) {
								dateObject.fullyBooked = true;
							} else {
								dateObject.fullyBooked = false;
								continue;
							}
						}
					}
				}
				dates.push(dateObject);
				date.setDate(date.getDate() + 1);
			}
		}

		return dates;
	}

	function CalendarDate({ day, date, name, onClick, season, hasBooked }) {
		let classes = "calendarDate";
		if (
			currentMonth === currentDate.month &&
			currentYear === currentDate.year
		) {
			if (date < currentDate.day) {
				classes = "calendarDate invalidDate";
			}
			if (date === currentDate.day) {
				classes = "calendarDate currentDate";
			}
		}
		if (selectedDay.day === date && selectedDay.month === currentMonth) {
			classes += " dateSelected";
		}
		if (season === "high") {
			classes += " highSeason";
		}

		return (
			<>
				<div onClick={onClick} className={classes}>
					<div className='dateWrap'>
						<p>{name}</p>
						<p>{date}</p>
						{hasBooked && (
							<div
								className={
									day.fullyBooked ? "hasBooked fullyBooked" : "hasBooked"
								}></div>
						)}
					</div>
				</div>
			</>
		);
	}
	function CalendarPicker({ value, prev, next }) {
		return (
			<>
				<div className='picker'>
					<img
						onClick={prev}
						className='backArrow pickerArrow'
						style={{ transform: "rotate(90deg)" }}
						src={arrow}
						alt='arrow'
					/>
					<p>{value}</p>
					<img
						onClick={next}
						className='nextArrow pickerArrow'
						style={{ transform: "rotate(-90deg)" }}
						src={arrow}
						alt='arrow'
					/>
				</div>
			</>
		);
	}

	function selectDate(e, day) {
		if (e.target.classList.contains("dateSelected")) {
			e.target.classList.remove("dateSelected");
			setSelectedDay(0);
			setTimeSelect(false);
		} else {
			const selected = document.querySelectorAll(".dateSelected");
			selected.forEach((item) => {
				item.classList.remove("dateSelected");
			});
			e.target.classList.add("dateSelected");
			setSelectedDay(day);
			setTimeSelect(true);
		}
		setConfirmBooking(false);
	}

	function yearPicker(action) {
		if (action) {
			setCurrentYear(currentYear + 1);
		} else {
			if (currentYear - 1 <= 0) {
				return;
			} else {
				if (currentYear - 1 < currentDate.year) {
					return;
				}
				setCurrentYear(currentYear - 1);
			}
		}
	}
	function monthPicker(action) {
		if (action) {
			if (currentMonth + 1 >= 12) {
				setCurrentMonth(0);
				setCurrentYear(currentYear + 1);
			} else {
				setCurrentMonth(currentMonth + 1);
			}
		} else {
			if (
				currentYear === currentDate.year &&
				currentMonth - 1 < currentDate.month
			) {
				return;
			}
			if (currentMonth - 1 < 0) {
				setCurrentMonth(11);
				setCurrentYear(currentYear - 1);
			} else {
				setCurrentMonth(currentMonth - 1);
			}
		}
	}

	function BookTime({ available, timevalue, text, reserved, max }) {
		let classes = "timeToBook";
		if (!available || reserved === max) {
			classes += " timeNotAvailable";
		}
		return (
			<>
				<p
					onClick={() => setTime(timevalue, text)}
					data-timevalue={timevalue}
					className={classes}>
					{text} <br />
					<span>
						{reserved}/{max}
					</span>
				</p>
			</>
		);
	}

	function dismissMessage() {
		setReservationMessage(false);
	}

	function setTime(val, text) {
		setChoices({ date: selectedDay, time: { val: val, text: text } });
		setSelectedTime(text);
		setTimeSelect(false);
		setConfirmBooking(true);
	}

	function handleConfirm() {
		setReservationMessage(true);
		setTimeSelect(false);
		setConfirmBooking(false);
		setBookingDone(true);
		setBookingLoading(true);

		setTimeout(() => {
			setBookingLoading(false);
		}, 1000);
	}

	function resetBooking() {
		setBookingDone(false);
	}

	return (
		<>
			<div className='calendarWrap'>
				<div className='bookingCalendar'>
					<button onClick={setTimeToday} id='todayBtn'>
						I dag
					</button>
					<div className='calendarPicker'>
						<CalendarPicker
							value={currentYear}
							prev={() => yearPicker(false)}
							next={() => yearPicker(true)}
						/>
						<CalendarPicker
							value={months[currentMonth]}
							prev={() => monthPicker(false)}
							next={() => monthPicker(true)}
						/>
					</div>
					{daysInMonth.map((day, i) => (
						<CalendarDate
							onClick={(e) => selectDate(e, day)}
							key={i}
							date={day.day}
							season={day.season}
							name={day.name}
							hasBooked={day.hasBooked}
							day={day}
						/>
					))}
					<small className='calendarExplain'>
						<div className='high'>Højsæson</div>{" "}
						<div className='yellow'>Delvist booket</div>{" "}
						<div className='red'>Fuldt booket</div>
					</small>
					{bookingDone && (
						<div className='bookingConfirmedOverlay'>
							{bookingLoading && (
								<div className='bookingLoading'>
									<Loading />
								</div>
							)}
							{!bookingLoading && (
								<div className='bookingDone'>
									<b>Booking gennemført!</b>
									<p>Vi glæder os meget til at se dig!</p>
									<small>
										{selectedDay.day}. {months[selectedDay.month]} -{" "}
										{selectedDay.year}
									</small>{" "}
									<small>
										{selectedDay.season === "high" ? "Højsæson" : ""}
										{selectedDay.season === "low" ? "Lavsæson" : ""} -{" "}
										{selectedTime}
									</small>
									<b>
										{selectedDay.season === "high" ? `${prices.high}` : ""}
										{selectedDay.season === "low" ? `${prices.low}` : ""} kr.
									</b>
									<div onClick={resetBooking} className='ctaButton'>
										Book igen
									</div>
								</div>
							)}
						</div>
					)}
				</div>
				{timeSelect && (
					<>
						{reservationMessage ? (
							<div ref={timeOverlayRef} className='bookingTimeOverlay'>
								<p>
									<b>Bemærk!</b> <br /> <br />
									Denne booking kræver at der er mindst 2 bookinger per
									tidspunkt. <br />
									Dette er for at fylde båndene så vores instruktører ikke skal
									kaldes ud for 1 person.
									<br />
									Hvis holdet ikke bliver udfyldt vil dine penge blive
									refunderet.
								</p>
								<div onClick={dismissMessage} className='ctaButton'>
									Jeg forstår
								</div>
							</div>
						) : (
							<div className='bookingTime'>
								<p className='bookingTimeTitle'>Vælg tidspunkt</p>
								<small>
									{selectedDay.day}. {months[selectedDay.month]} -{" "}
									{selectedDay.year}
								</small>
								<div className='bookingTimes'>
									{selectedDay.times.map((time, i) => (
										<BookTime
											key={i}
											available={time.reserved}
											timevalue={i}
											text={time.time}
											reserved={time.reserved.amount}
											max={time.reserved.max}
										/>
									))}
								</div>
							</div>
						)}
					</>
				)}
				{confirmBooking && (
					<div className='confirmWrap'>
						<p className='confirmBookingTitle'>Bekræft booking</p>
						<small>
							{selectedDay.day}. {months[selectedDay.month]} -{" "}
							{selectedDay.year}
						</small>{" "}
						<small>
							{selectedDay.season === "high" ? "Højsæson" : ""}
							{selectedDay.season === "low" ? "Lavsæson" : ""} - {selectedTime}
						</small>
						<p className='confirmPrice'>
							{selectedDay.season === "high" ? `${prices.high}` : ""}
							{selectedDay.season === "low" ? `${prices.low}` : ""} kr.
						</p>
						<p>
							Ved valg af kursus er den valgte dato den første dag for kurset.
							Resten af kurset planlægges over mail/telefon.
						</p>
						<p>
							Ved at bekræfte booking accepterer du samtidig vores{" "}
							<a href='/betingelser' target='_blank'>
								betingelser
							</a>
						</p>
						<div onClick={handleConfirm} className='ctaButton'>
							Bekræft
						</div>
					</div>
				)}
			</div>
		</>
	);
}
