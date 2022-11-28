import React from "react";

import video from "../assets/videos/SkiArena.mp4";
import logo from "../assets/images/skiarenalogo-white.svg";
import divider from "../assets/images/divider.svg";
import { Link } from "react-router-dom";

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
							<div className='overlayRight'>
								<h1>Åbent hele året</h1>
								<h2>Sjovt, hyggeligt og lærerigt</h2>
								<p>
									På ski hele året? Det er muligt i SkiArena! Vi har åbent året
									rundt så du ikke skal savne skiløbet
								</p>
								<Link className='ctaButton'>Book nu</Link>
							</div>
						</div>
					</div>
				</div>
				<div id='topHomeSection' className='homeSection'>
					<div className='sectionDivider'>
						<img src={divider} alt='divider' />
					</div>
					<h2 className='sectionTitle'>
						Kurser og lektioner for familier, enkelte og firmaer
					</h2>
				</div>
			</div>
		</>
	);
}
