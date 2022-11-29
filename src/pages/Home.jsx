import React from "react";

import video from "../assets/videos/SkiArena.mp4";
import logo from "../assets/images/skiarenalogo-white.svg";
import divider from "../assets/images/divider.svg";
import bluebg from "../assets/images/bluebg.svg";
import { Link } from "react-router-dom";

export default function Home() {
	function handleContactSubmit(e) {
		e.preventDefault();
		console.log(e.target.contactName.value);
		console.log(e.target.contactTel.value);
		console.log(e.target.contactMail.value);
		console.log(e.target.contactCompany.value);
		console.log(e.target.contactMessage.value);
	}

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
				<div
					className='homeSection bgSection'
					style={{ backgroundImage: `url(${bluebg})` }}>
					<h2 className='sectionTitle'>Hurtige links</h2>
				</div>
				<div className='homeSection'>
					<h2 className='sectionTitle'>Åbningstider</h2>
				</div>
				<div className='homeSection'>
					<h2 className='sectionTitle'>Kontakt</h2>
					<div id='contactWrap'>
						<form onSubmit={handleContactSubmit} id='contactForm'>
							<h3 style={{ margin: 0 }}>Send os en besked</h3>
							<label htmlFor='contactName'>
								<p>
									Navn <span style={{ color: "red" }}>*</span>
								</p>
								<input
									type='text'
									name='contactName'
									id='contactName'
									required
								/>
							</label>
							<div id='telMail'>
								<label htmlFor='contactTel'>
									<p>
										Telefon <span style={{ color: "red" }}>*</span>
									</p>
									<input
										type='tel'
										name='contactTel'
										id='contactTel'
										required
										pattern='[0-9].{5,}'
									/>
								</label>
								<label htmlFor='contactTel'>
									<p>
										Email <span style={{ color: "red" }}>*</span>
									</p>
									<input
										type='email'
										name='contactMail'
										id='contactMail'
										required
									/>
								</label>
							</div>
							<label htmlFor='contactTel'>
								<p>Firmanavn</p>
								<input type='text' name='contactCompany' id='contactCompany' />
							</label>
							<label htmlFor='contactTel'>
								<p>
									Besked <span style={{ color: "red" }}>*</span>
								</p>
								<textarea
									name='contactMessage'
									id='contactMessage'
									required></textarea>
							</label>
							<button type='submit' className='ctaButton'>
								Send besked
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
