import React from "react";
import BookingItem from "../components/BookingItem";

import bookingData from "../Booking.json";

export default function Booking() {
	document.title = "SkiArena - Booking";
	return (
		<>
			<div id='bookingWrap' className='pageWrap'>
				<h1 className='pageTitle'>Booking</h1>
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
			</div>
		</>
	);
}
