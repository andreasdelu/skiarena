import React, { useState } from "react";

import close from "../assets/images/close.svg";

export default function ImageClickable({ src, title = "", desc = "" }) {
	const [popup, setpopup] = useState(false);

	function togglePopup() {
		if (popup) {
			setpopup(false);
		} else {
			setpopup(true);
		}
	}

	return (
		<>
			<div onClick={togglePopup} className='imageClickable'>
				<img src={src} alt={title} />
				{title && (
					<div className='clickableOverlay'>
						<p className='clickableTitle'>{title}</p>
						<p className='clickableDesc'>{desc}</p>
					</div>
				)}
			</div>
			{popup && (
				<div className='imagePopup'>
					<div onClick={togglePopup} className='popupBackground'></div>
					<div className='popupContent'>
						<div className='closeBG'></div>
						<img
							onClick={togglePopup}
							className='popupClose'
							src={close}
							alt='close'
						/>
						<img className='popupImage' src={src} alt={title} />
						{/* <div className='popupDesc'>
							<p className='clickableTitle'>{title}</p>
							<p className='clickableDesc'>{desc}</p>
						</div> */}
					</div>
				</div>
			)}
		</>
	);
}
