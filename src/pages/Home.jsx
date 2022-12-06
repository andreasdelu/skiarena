import React from "react";

import video from "../assets/videos/SkiArena.mp4";
import logo from "../assets/images/skiarenalogo-white.svg";
import divider from "../assets/images/divider.svg";
import bluebg from "../assets/images/bluebg.svg";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import ski from "../assets/images/ski-placeholder.jpeg";
import ski2 from "../assets/images/ski-placeholder-2.jpeg";
import ImageClickable from "../components/ImageClickable";

export default function Home() {
	document.title = "SkiArena";
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
								<Link className='ctaButton' to={"/booking"}>
									Book nu
								</Link>
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
					<section className='cards-list'>
						<Card
							link={"/kurser"}
							coverImg={
								"https://www.skisport.dk/img/55d5ca02988f8_skisport_dk.jpg"
							}
							title={"Kurser"}
							description={"Wow kurser er ok swag"}
							price={"Fra 550 kr."}
						/>
						<Card
							link={"/lektioner"}
							coverImg={
								"https://funguide.dk/wp-content/uploads/2014/09/indoor-ski.jpg"
							}
							title={"Lektioner"}
							description={""}
							price={"Fra 375 kr."}
						/>
						<Card
							link={"/arrangementer"}
							coverImg={
								"https://www.skisport.dk/img/55d5c9be6ab21_skisport_dk.jpg"
							}
							title={"Arrangementer"}
							description={""}
							price={"Fra 200 kr."}
						/>
					</section>
				</div>
				<div
					className='homeSection bgSection'
					style={{
						backgroundImage: `url(${bluebg})`,
						backgroundPositionX: "100vw",
					}}>
					<h2 className='sectionTitle'>Hurtige links</h2>
				</div>
				<div className='homeSection'>
					<h2 className='sectionTitle'>Billeder</h2>
					<div className='homeImages'>
						<ImageClickable
							src={ski2}
							title='Test'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
					vel esse placeat ipsam, beatae rerum aliquid in aut nesciunt enim
					tenetur itaque autem amet deleniti fugiat sunt quis ullam?'
						/>
						<ImageClickable
							src={ski2}
							title='Test'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
					vel esse placeat ipsam, beatae rerum aliquid in aut nesciunt enim
					tenetur itaque autem amet deleniti fugiat sunt quis ullam?'
						/>

						<ImageClickable
							src={ski}
							title='Test'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
					vel esse placeat ipsam, beatae rerum aliquid in aut nesciunt enim
					tenetur itaque autem amet deleniti fugiat sunt quis ullam?'
						/>
						<ImageClickable
							src={ski2}
							title='Test'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
					vel esse placeat ipsam, beatae rerum aliquid in aut nesciunt enim
					tenetur itaque autem amet deleniti fugiat sunt quis ullam?'
						/>
						<ImageClickable
							src={ski2}
							title='Test'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
					vel esse placeat ipsam, beatae rerum aliquid in aut nesciunt enim
					tenetur itaque autem amet deleniti fugiat sunt quis ullam?'
						/>
						<ImageClickable
							src={ski}
							title='Test'
							desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
					vel esse placeat ipsam, beatae rerum aliquid in aut nesciunt enim
					tenetur itaque autem amet deleniti fugiat sunt quis ullam?'
						/>
					</div>
				</div>
				<div
					className='homeSection bgSection'
					style={{
						backgroundImage: `url(${bluebg})`,
						backgroundPositionX: "50vw",
					}}>
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
						<div id='mapCard'>
							<iframe
								id='googleMap'
								title='map'
								style={{ border: 0 }}
								loading='lazy'
								allowFullScreen
								referrerPolicy='no-referrer-when-downgrade'
								src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&q=SkiArena+Aarhus`}></iframe>
							<div className='mapInfo'>
								<p>
									SkiArena Aarhus <br /> Hasselager Centervej 30 <br /> 8260,
									Viby J
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
