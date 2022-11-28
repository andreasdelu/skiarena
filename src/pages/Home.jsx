import React from "react";

import video from "../assets/videos/SkiArena.mp4";
import logo from "../assets/images/skiarenalogo-white.svg";

export default function Home() {
	return (
		<>
			<div id='homeWrap'>
				<div id='homeHero'>
					<video id='heroVideo' autoPlay muted loop>
						<source src={video} />
					</video>
					<div className='videoOverlay'>
						<div className='overlayContent'>
							<div className='overlayLeft'>
								<img src={logo} alt='skiarena' />
							</div>
							<div className='overlayRight'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
