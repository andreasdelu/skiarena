import React from "react";

export default function Kontakt() {
	return (
		<>
			<div id='contactWrap'>
				<form /* onSubmit={handleContactSubmit} */ id='contactForm'>
					<h3 style={{ margin: 0 }}>Send os en besked</h3>
					<label htmlFor='contactName'>
						<p>
							Navn <span style={{ color: "red" }}>*</span>
						</p>
						<input type='text' name='contactName' id='contactName' required />
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
							SkiArena Aarhus <br /> Hasselager Centervej 30 <br /> 8260, Viby J
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
