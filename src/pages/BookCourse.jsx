import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function BookCourse() {
	const { course } = useParams();
	const [query, setQuery] = useSearchParams();

	if (!query.get("title")) {
		window.history.back();
	}

	let pageTitle = query.get("title");
	document.title = "SkiArena - Booking: " + pageTitle;

	return (
		<>
			<div className='pageWrap'>
				<h1 style={{ marginBottom: 0 }} className='pageTitle'>
					Booking
				</h1>
				<h2 style={{ textAlign: "center", marginTop: 0 }}>{pageTitle}</h2>
			</div>
		</>
	);
}
