import React from "react";
import logo from "../assets/images/skiarenalogo.svg";

export default function Loading() {
	return (
		<div className='loading'>
			<img className='loading--logo' src={logo} alt='SkiArena logo' />
			<p>Indlæser... Chill seriøst.</p>
		</div>
	);
}
