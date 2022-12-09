import React from "react";

export default function Loading() {
	return (
		<div className='loadingWrapper'>
			<div className='logoText'>
				<div class='loader'></div>
				<p className='loadingText'>Indlæser...</p>
			</div>
		</div>
	);
}
