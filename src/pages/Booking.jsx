import React, { useState } from "react";
import BookingItem from "../components/BookingItem";

import bookingData from "../Booking.json";
import { useRef } from "react";
import { useEffect } from "react";

export default function Booking() {
	document.title = "SkiArena - Booking";

	const [filter, setFilter] = useState(0);

	const filterAlleRef = useRef(null);
	const filterKurserRef = useRef(null);
	const filterLektionerRef = useRef(null);
	const filterArrangementerRef = useRef(null);
	const selectorRef = useRef(null);

	useEffect(() => {
		let widthAlle = filterAlleRef.current.offsetWidth;
		let widthKurser = filterKurserRef.current.offsetWidth;
		let widthLektioner = filterLektionerRef.current.offsetWidth;
		let widthArrangementer = filterArrangementerRef.current.offsetWidth;

		selectorRef.current.style.width = selectorRef.current.offsetHeight;
		selectorRef.current.style.height = "90%";
		switch (filter) {
			case 0:
				selectorRef.current.style.left = 0;
				setTimeout(() => {
					selectorRef.current.style.width = widthAlle + "px";
				}, 100);
				break;
			case 1:
				selectorRef.current.style.left = widthAlle + "px";
				setTimeout(() => {
					selectorRef.current.style.width = widthKurser + "px";
				}, 100);

				break;
			case 2:
				selectorRef.current.style.left = widthAlle + widthKurser + "px";
				setTimeout(() => {
					selectorRef.current.style.width = widthLektioner + "px";
				}, 100);
				break;
			case 3:
				selectorRef.current.style.left =
					widthAlle + widthKurser + widthLektioner + "px";
				setTimeout(() => {
					selectorRef.current.style.width = widthArrangementer + "px";
				}, 100);

				break;

			default:
				selectorRef.current.style.left = "0px";
				selectorRef.current.style.width = widthAlle + "px";
				break;
		}
		setTimeout(() => {
			selectorRef.current.style.height = "100%";
		}, 100);
	}, [filter]);

	return (
		<>
			<div id='bookingWrap' className='pageWrap'>
				<h1 className='pageTitle'>Booking</h1>
				<div id='bookingFilter'>
					<div ref={selectorRef} className='filterSelected'></div>
					<p
						onClick={() => setFilter(0)}
						ref={filterAlleRef}
						className={filter === 0 ? "filter isSelected" : "filter"}>
						Alle
					</p>
					<p
						onClick={() => setFilter(1)}
						ref={filterKurserRef}
						className={filter === 1 ? "filter isSelected" : "filter"}>
						Kurser
					</p>
					<p
						onClick={() => setFilter(2)}
						ref={filterLektionerRef}
						className={filter === 2 ? "filter isSelected" : "filter"}>
						Lektioner
					</p>
					<p
						onClick={() => setFilter(3)}
						ref={filterArrangementerRef}
						className={filter === 3 ? "filter isSelected" : "filter"}>
						Arrangementer
					</p>
				</div>
				{filter === 0 && (
					<>
						<h2>Kurser</h2>
						{bookingData.map((book, i) => {
							if (book.type === "kursus") {
								return <BookingItem key={i} {...book} />;
							}
						})}
						<h2>Lektioner</h2>
						{bookingData.map((book, i) => {
							if (book.type === "lektion") {
								return <BookingItem key={i} {...book} />;
							}
						})}
						<h2>Arrangementer</h2>
						{bookingData.map((book, i) => {
							if (book.type === "arrangement") {
								return <BookingItem key={i} {...book} />;
							}
						})}
					</>
				)}
				{filter === 1 && (
					<>
						<h2>Kurser</h2>
						{bookingData.map((book, i) => {
							if (book.type === "kursus") {
								return <BookingItem key={i} {...book} />;
							}
						})}
					</>
				)}
				{filter === 2 && (
					<>
						<h2>Lektioner</h2>
						{bookingData.map((book, i) => {
							if (book.type === "lektion") {
								return <BookingItem key={i} {...book} />;
							}
						})}
					</>
				)}
				{filter === 3 && (
					<>
						<h2>Arrangementer</h2>
						{bookingData.map((book, i) => {
							if (book.type === "arrangement") {
								return <BookingItem key={i} {...book} />;
							}
						})}
					</>
				)}
			</div>
		</>
	);
}
