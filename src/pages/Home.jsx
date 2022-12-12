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

/* Import til iconer */
import kursus from "../assets/images/icons/kursus-icon.svg";
import arrangementer from "../assets/images/icons/arrangementer-icon.svg";
import lektion from "../assets/images/icons/lektion-icon.svg";
import priser from "../assets/images/icons/priser-icon.svg";

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
					{/* Styling af ikoner */}
					<div className='iconOverview'>
					<Link to={"/kurser"}>
						<div className='iconText'>
							<img className='icon' src={kursus} alt='kursus ikon' />
							<span className='titelIcons'>Kursus</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								luctus posuere ex ut dapibus. Sed ac lectus leo. Lorem ipsum
								dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</Link>
					<Link to={"/lektioner"}>
						<div className='iconText'>
							<img src={lektion} alt='kursus ikon' />
							<span className='titelIcons'>Lektioner</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								luctus posuere ex ut dapibus. Sed ac lectus leo. Lorem ipsum
								dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</Link>
					<Link to={"/arrangementer"}>
						<div className='iconText'>
							<img src={arrangementer} alt='kursus ikon' />
							<span className='titelIcons'>Arrangementer</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								luctus posuere ex ut dapibus. Sed ac lectus leo. Lorem ipsum
								dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</Link>
					<Link to={"/priser"}>
						<div className='iconText'>
							<img src={priser} alt='kursus ikon' />
							<span className='titelIcons'>Priser</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								luctus posuere ex ut dapibus. Sed ac lectus leo. Lorem ipsum
								dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</Link>
					</div>
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
