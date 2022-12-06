import React from "react";
import bg from "../assets/images/footerbg.svg";

import fb from "../assets/images/fb.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";
import yt from "../assets/images/yt.svg";
import phone from "../assets/images/phone.svg";
import mail from "../assets/images/mail.svg";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<footer id='footer'>
				<div
					style={{ backgroundImage: `url(${bg})` }}
					className='footerBG'></div>
				<div className='footerWrap'>
					<div className='footerLeft footerSection'>
						<h6>Kontakt</h6>
						<div className='contactIcon'>
							<img src={phone} alt='phone' />
							<a href='tel:+4525948777'>25 94 87 77</a>
						</div>
						<div className='contactIcon'>
							<img src={mail} alt='mail' />

							<a href='mailto:info@skiarena.dk'>info@skiarena.dk</a>
						</div>
						<div className='socialLinks'>
							<a href='http://www.facebook.com/skiarena'>
								<img src={fb} alt='facebook logo' />
							</a>
							<a href='http://www.linkedin.com/company/skiarena-aarhus'>
								<img src={linkedin} alt='linkedin logo' />
							</a>
							<a href='http://www.youtube.com/user/SkiArenaAarhus'>
								<img src={yt} alt='youtube logo' />
							</a>
							<a href='http://instagram.com/skiarenaaarhus'>
								<img src={insta} alt='instagram logo' />
							</a>
						</div>
					</div>
					<div className='footerMid footerSection'>
						<h6>Åbningstider</h6>
						<p>
							Man - Fre: 14:30 - 20:00 <br /> Lør - Søn: 10:00 - 20:00 <br />{" "}
							<br /> Specielle Arrangementer: Efter aftale
						</p>
					</div>
					<div className='footerRight footerSection'>
						<h6>Adresse</h6>
						<p>
							SkiArena Aarhus <br />
							Hasselager Centervej 30 <br />
							8260, Viby J
						</p>
					</div>
				</div>
				<div className='footerBottom'>
					© 2022 SkiArena ·{" "}
					<a href='https://racehall.com/' target='_blank' rel='noreferrer'>
						Racehall
					</a>{" "}
					·{" "}
					<a href='https://dinerslounge.dk/' target='_blank' rel='noreferrer'>
						Diner’s Lounge
					</a>{" "}
					· <Link to={"/cookies"}>Cookie- og privatlivspolitik</Link>
				</div>
			</footer>
		</>
	);
}
