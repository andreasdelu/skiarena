import React from "react";
import logo from "../assets/images/skiarenalogo.svg";

export default function Loading() {
	return (
		<div className='loadingWrapper'>
			<img className='loadingLogo' src={logo} alt='SkiArena logo' />
			<p className="loadingText">Indlæser... Chill seriøst.</p>
		</div>
	);
}
