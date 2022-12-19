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
									Vi tilbyder en række forskellige kurser i SkiArena, ved at
									klikke videre kan du læse meget mere om de enkelte kurser.
								</p>
							</div>
						</Link>
						<Link to={"/lektioner"}>
							<div className='iconText'>
								<img className='icon' src={lektion} alt='kursus ikon' />
								<span className='titelIcons'>Lektioner</span>
								<p>
									En ski-lektion i SkiArena varer en time. Der kan være 3
									deltagere på båndet samtidig, som bliver inddelt efter niveau.
								</p>
							</div>
						</Link>
						<Link to={"/arrangementer"}>
							<div className='iconText'>
								<img className='icon' src={arrangementer} alt='kursus ikon' />
								<span className='titelIcons'>Arrangementer</span>
								<p>
									Vi afholder en lang række arrangementer. Hos os er alle
									velkomne og vi kan skræddersy et arrangement netop til jer.
								</p>
							</div>
						</Link>
						<Link to={"/priser"}>
							<div className='iconText'>
								<img className='icon' src={priser} alt='kursus ikon' />
								<span className='titelIcons'>Priser</span>
								<p>
									Her kan du få en oversigt over SkiArenas priser og tilbud.
									Alle priser er inklusiv instruktør og leje af udstyr.
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
								På vores bånd kan der stå op til 3 personer på ski, eller 2 på
								snowboard. Skibakken består af et underlag af PP fibre, som er
								kunstig græs. Når vand er tilføjet på det kunstige græs, fungere
								det til ski forbrug. Hældningen på skibakken kan ændres alt
								efter dit niveau, den kan justieres fra 30 til 75 grader.
							</p>
						</div>
					</div>
					<div className='infographic-bot'>
						<div className='info-tekst'>
							<h3 className='info-h3'>Fjernbetjening</h3>
							<p className='info-p'>
								Instruktøren har mulighed for at justere båndet, alt efter
								hastighed og har muligheden for at stoppe og tænde båndet. Det
								bruges til at formindske ulykker, men også til at tilpasse ens
								erfaring, så man kan arbejde sig ligeså stille op. Når du er
								igang med undervisningen, vil instruktøren stå klar med
								fjernbetjeningen, så du kun skal fokusere på træningen.
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
					<h2 className='sectionTitle'>Åbningstider</h2>

					<div className='aabningSektion'>
						<div className='aabningTop'>
							<div className='tiderWrapper'>
								<div className='dage'>
									<p className='aabningText'>
										Mandag: <br /> Tirsdag: <br /> Onsdag: <br />
										Torsdag: <br /> Fredag: <br /> Lørdag: <br /> Søndag:
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
									Ofte har vi forlænget åbningstider i ferierne. <br />
									Oftest kl. 10-20 alle dage. <br /> Følg med på vores Facebook,
									<br /> for at se, hvornår vi holder special-åbent
								</p>
							</div>
						</div>
						<div className='generelInfo'>
							<p>
								<b>Husk der kræves bookning på forhånd, for at åbne båndet.</b>
							</p>
							<p>
								Har du et ønske om at besøge os udenfor vores normale åbningstid
								kan vi naturligvis også klare det.
							</p>
							<p>
								Arrangementer kan ligeledes bookes udenfor normal åbningstid.
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
