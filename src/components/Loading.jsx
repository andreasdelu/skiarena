import React from "react";

export default function Loading() {
	return (
		<div className='loadingWrapper'>
			<div className='logoText'>
				<div className='loader'></div>
				<p className='loadingText'>Indlæser...</p>
			</div>
		</div>
	);
}
