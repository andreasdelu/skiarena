import React from "react";
/* import logo from "../assets/images/skiarenalogo.svg"; */

export default function Loading() {
	return (
		<div className='loadingWrapper'>
			<div className="logoText">
				{/* <img className='loadingLogo' src={logo} alt='SkiArena logo' /> */}
				<div class="loader"></div>
				<p className="loadingText">Indlæser... Chill seriøst.</p>
			</div>
		</div>
	);
}
