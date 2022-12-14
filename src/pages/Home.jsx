import React, { useEffect, useRef, useState } from "react";

import video from "../assets/videos/SkiArena.mp4";
import thumbnail from "../assets/images/thumbnail.png";
import logo from "../assets/images/skiarenalogo-white.svg";
import divider from "../assets/images/divider.svg";
import bluebg from "../assets/images/bluebg.svg";
import { Link } from "react-router-dom";
import ImageClickable from "../components/ImageClickable";

import skislope from "../assets/images/skislope-donee.svg";
import fjernbetjening from "../assets/images/fjernbetjening.svg";

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
	const thumbnailRef = useRef(null);

	const [featuredImages, setFeaturedImages] = useState([]);

	async function getData() {
		const res = await fetch(
			"https://skiarena-admin.delu.dk/wp-json/wp/v2/posts?slug=galleri-forside"
		);
		const data = await res.json();
		let dataArray = data[0].content.rendered.split(" ");
		let arr = [];
		dataArray.forEach((d) => {
			if (d.includes("src=")) {
				let replaced = d.replaceAll("src=", "");
				replaced = replaced.replaceAll('"', "");
				arr.push(replaced);
			}
		});

		setFeaturedImages(arr);
	}

	useEffect(() => {
		getData();
		loadHeroVideo();
	}, []);

	function removeThumbnail() {
		thumbnailRef.current.classList.add("removed");
	}

	function loadHeroVideo() {
		document.getElementById("heroVideo").src = video;
	}

	return (
		<>
			<div id='homeWrap'>
				<div id='homeHero'>
					<video
						src=''
						onCanPlay={removeThumbnail}
						id='heroVideo'
						autoPlay
						muted
						loop
					/>
					<img
						ref={thumbnailRef}
						id='heroImage'
						src={thumbnail}
						alt='video thumbnail'
					/>
					<div className='videoOverlay'>
						<div className='overlayContent'>
							<div className='overlayLeft'>
								<img src={logo} alt='skiarena' />
							</div>
							<div className='overlayRight'>
								<h1>??bent hele ??ret</h1>
								<h2>Sjovt, hyggeligt og l??rerigt</h2>
								<p>
									P?? ski hele ??ret? Det er muligt i SkiArena! Vi har ??bent ??ret
									rundt s?? du ikke skal savne skil??bet
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
									Vi tilbyder en r??kke forskellige kurser i SkiArena, ved at
									klikke videre kan du l??se meget mere om de enkelte kurser.
								</p>
							</div>
						</Link>
						<Link to={"/lektioner"}>
							<div className='iconText'>
								<img className='icon' src={lektion} alt='kursus ikon' />
								<span className='titelIcons'>Lektioner</span>
								<p>
									En ski-lektion i SkiArena varer en time. Der kan v??re 3
									deltagere p?? b??ndet samtidig, som bliver inddelt efter niveau.
								</p>
							</div>
						</Link>
						<Link to={"/arrangementer"}>
							<div className='iconText'>
								<img className='icon' src={arrangementer} alt='kursus ikon' />
								<span className='titelIcons'>Arrangementer</span>
								<p>
									Vi afholder en lang r??kke arrangementer. Hos os er alle
									velkomne og vi kan skr??ddersy et arrangement netop til jer.
								</p>
							</div>
						</Link>
						<Link to={"/priser"}>
							<div className='iconText'>
								<img className='icon' src={priser} alt='kursus ikon' />
								<span className='titelIcons'>Priser</span>
								<p>
									Her kan du f?? en oversigt over SkiArenas priser og tilbud.
									Alle priser er inklusiv instrukt??r og leje af udstyr.
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
					<h2 className='sectionTitle'>Hvordan fungerer det?</h2>

					<div className='infographic-top'>
						<img
							className='info-top-img'
							src={skislope}
							alt='infograhic slope'
						/>
						<div className='info-tekst'>
							<h3 className='info-h3'>Skislope</h3>
							<p className='info-p'>
								P?? vores b??nd kan der st?? op til 3 personer p?? ski, eller 2 p??
								snowboard. Skibakken best??r af et underlag af PP fibre, som er
								kunstig gr??s. N??r vand er tilf??jet p?? det kunstige gr??s, fungere
								det til ski forbrug. H??ldningen p?? skibakken kan ??ndres alt
								efter dit niveau, den kan justieres fra 30 til 75 grader.
							</p>
						</div>
					</div>
					<div className='infographic-bot'>
						<div className='info-tekst'>
							<h3 className='info-h3'>Fjernbetjening</h3>
							<p className='info-p'>
								Instrukt??ren har mulighed for at justere b??ndet, alt efter
								hastighed og har muligheden for at stoppe og t??nde b??ndet. Det
								bruges til at formindske ulykker, men ogs?? til at tilpasse ens
								erfaring, s?? man kan arbejde sig liges?? stille op. N??r du er
								igang med undervisningen, vil instrukt??ren st?? klar med
								fjernbetjeningen, s?? du kun skal fokusere p?? tr??ningen.
							</p>
						</div>
						<img
							className='info-bot-img'
							src={fjernbetjening}
							alt='infograhic fjernbetjening'
						/>
					</div>
				</div>
				<div className='homeSection'>
					<h2 className='sectionTitle'>Billeder</h2>
					<div className='homeImages'>
						{featuredImages.map((img, i) => {
							if (i <= 6) {
								return <ImageClickable key={i} src={img} />;
							}
						})}
					</div>
				</div>
				<div
					className='homeSection bgSection'
					style={{
						backgroundImage: `url(${bluebg})`,
						backgroundPositionX: "50vw",
					}}>
					<h2 className='sectionTitle'>??bningstider</h2>

					<div className='aabningSektion'>
						<div className='aabningTop'>
							<div className='tiderWrapper'>
								<div className='dage'>
									<p className='aabningText'>
										Mandag: <br /> Tirsdag: <br /> Onsdag: <br />
										Torsdag: <br /> Fredag: <br /> L??rdag: <br /> S??ndag:
									</p>
								</div>
								<div className='tider'>
									<p className='aabningText'>
										14:30 - 20:00 <br /> 14:30 - 20:00 <br /> 14:30 - 20:00{" "}
										<br />
										14:30 - 20:00 <br /> 14:30 - 20:00 <br /> 10:00 - 20:00
										<br /> 10:00 - 20:00
									</p>
								</div>
							</div>
							<div className='aabningInfo'>
								<p>
									<b>Specielle Arrangementer:</b> <br /> Efter aftale
									<br />
									<br />
									<b>Ferier:</b>
									<br />
									Ofte har vi forl??nget ??bningstider i ferierne. <br />
									Oftest kl. 10-20 alle dage. <br /> F??lg med p?? vores Facebook,
									<br /> for at se, hvorn??r vi holder special-??bent
								</p>
							</div>
						</div>
						<div className='generelInfo'>
							<p>
								<b>Husk der kr??ves bookning p?? forh??nd, for at ??bne b??ndet.</b>
							</p>
							<p>
								Har du et ??nske om at bes??ge os udenfor vores normale ??bningstid
								kan vi naturligvis ogs?? klare det.
							</p>
							<p>
								Arrangementer kan ligeledes bookes udenfor normal ??bningstid.
							</p>
						</div>
					</div>
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
