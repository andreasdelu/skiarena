import React, { useEffect, useState } from "react";

import arrow from "../assets/images/Arrow.svg";

export default function BookingCalendar() {
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

	const days = [
		"Mandag",
		"Tirsdag",
		"Onsdag",
		"Torsdag",
		"Fredag",
		"Lørdag",
		"Søndag",
	];
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

		while (date.getMonth() === month) {
			let dateObject = {
				day: date.getDate(),
				name: date.toLocaleDateString("da-DK", { weekday: "short" }),
				month: date.getMonth(),
				year: date.getFullYear(),
			};
			dates.push(dateObject);
			date.setDate(date.getDate() + 1);
		}

		return dates;
	}

	function CalendarDate({ date, name, onClick }) {
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
		return (
			<>
				<div onClick={onClick} className={classes}>
					<div className='dateWrap'>
						<p>{name}</p>
						<p>{date}</p>
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
		} else {
			const selected = document.querySelectorAll(".dateSelected");
			selected.forEach((item) => {
				item.classList.remove("dateSelected");
			});
			e.target.classList.add("dateSelected");
		}
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
							name={day.name}
						/>
					))}
				</div>
			</div>
		</>
	);
}
