import React from "react";
import { Link } from "react-router-dom";

export default function Prices() {
	document.title = "SkiArena - Priser";
	return (
		<>
			<div id='pricesWrap'>
				<h1 className='pageTitle'>Prisoversigt</h1>
				<div className='pricesContent'>
					<table id='lektioner'>
						<thead>
							<tr>
								<th>Skilektioner</th>
								<th className='priceCol'>Normalpris</th>
								<th className='priceCol'>Højsæson</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link to={"/lektioner/enkelt"}>Enkeltlektion</Link> - Ski
								</td>
								<td>375 Kr.</td>
								<td>375 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/prøve"}>Prøvelektion - 2 pers.</Link>
								</td>
								<td>550 Kr.</td>
								<td>550 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/enkelt"}>3 på båndet</Link> (ved samlet
									bestilling)
								</td>
								<td>750 Kr.</td>
								<td>850 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/familie"}>Familielektion</Link>
								</td>
								<td>750 Kr.</td>
								<td>850 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Personlig lektion</Link>
								</td>
								<td>675 Kr.</td>
								<td>750 Kr.</td>
							</tr>
						</tbody>
					</table>
					<table id='kurser'>
						<thead>
							<tr>
								<th>Skikurser</th>
								<th className='priceCol'>Normalpris</th>
								<th className='priceCol'>Højsæson</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Basiskursus</Link>
								</td>
								<td>750 Kr.</td>
								<td>850 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Basiskursus - Hold</Link>
								</td>
								<td>1.000 Kr.</td>
								<td>1.133 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Teknikkursus</Link> - 6
									lektioner á 2 timer
								</td>
								<td>1.795 Kr.</td>
								<td>1.795 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Teknikkursus</Link> - 9
									lektioner á 2 timer
								</td>
								<td>2.495 Kr.</td>
								<td>2.495 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Familiekursus</Link>
								</td>
								<td>3.750 Kr.</td>
								<td>4.250 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Firma-tur</Link> - 3
									lektioner pr. person
								</td>
								<td>795 Kr.</td>
								<td>795 Kr.</td>
							</tr>
						</tbody>
					</table>
					<table id='snowboard'>
						<thead>
							<tr>
								<th>Snowboard</th>
								<th className='priceCol'>Normalpris</th>
								<th className='priceCol'>Højsæson</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Enkeltlektion</Link>
								</td>
								<td>375 Kr.</td>
								<td>375 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>3 Lektioner</Link>
								</td>
								<td>900 Kr.</td>
								<td>995 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/personlig"}>Snowboard - Familie</Link>
								</td>
								<td>750 Kr.</td>
								<td>850 Kr.</td>
							</tr>
						</tbody>
					</table>
					<table id='arrangementer'>
						<thead>
							<tr>
								<th>Arrangementer</th>
								<th className='priceCol'>Normalpris</th>
								<th className='priceCol'>Højsæson</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Link to={"/lektioner/gruppe"}>Gruppe</Link> - 1 bånd i 1
									time, 1 instruktør <br /> (1-6 pers.)
								</td>
								<td>1.500 Kr.</td>
								<td>1.500 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/gruppe"}>Gruppe</Link> - 1 bånd i 2
									timer, 1 instruktør <br /> (7-12 pers.)
								</td>
								<td>2.500 Kr.</td>
								<td>2.500 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/lektioner/gruppe"}>Gruppe</Link> - 2 bånd i 2
									timer, 2 instruktører <br /> (13-24 pers.)
								</td>
								<td>4.000 Kr.</td>
								<td>4.000 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/arrangementer/polterabend"}>Polterabend</Link> - 1
									time
								</td>
								<td>650 Kr.</td>
								<td>650 Kr.</td>
							</tr>
							<tr>
								<td>
									<Link to={"/arrangementer/blaa-mandag"}>Blå Mandag</Link> -
									pr. person v/6 personer
								</td>
								<td>200 Kr.</td>
								<td>
									<Link to={"/kontakt"}>Kontakt os</Link>
								</td>
							</tr>
							<tr>
								<td>Ekstra instruktør - pr. time</td>
								<td>375 Kr.</td>
								<td>400 Kr.</td>
							</tr>
						</tbody>
					</table>
					<div className='pricesInfo'>
						<h2>Information</h2>
						For alle lektioner (undtaget personlig træning) gælder det at der
						skal være minimum 2 deltager på holdet. For Teknik kurser skal der
						være minimum 5 personer på holdet. <br />
						<h3>Højsæson</h3>
						Vores højsæson er fra og med uge 52 til og med uge 8. I den periode
						gælder højsæson priserne. <br />
						<h3>Generelt</h3>
						Alle priser er inklusiv instruktør og leje af udstyr (ski/snowboard,
						støvler og hjelm) Såfremt ingen af ovenstående tilbud passer til
						dine ønsker, er du altid velkommen til at kontakte os for et
						uforpligtende tilbud. <br /> <br /> Skoler, skiklubber m.v. har også
						mulighed for at leje bånd både med og uden instruktør. Hør nærmere
						ved at <Link to={"/kontakt"}>kontakte os</Link> <br />
						<h3>Afbudspolitik</h3>I tilfælde af at du skulle blive forhindret i
						at møde op, beder vi dig kontakte SkiArena minimum 24 timer før
						start. Ellers må vi desværre meddele, at den fulde lektions-pris vil
						blive faktureret og skal betales.
						<br /> <br />
						Læs dette og vores{" "}
						<Link to={"/betingelser"}>generelle betingelser</Link>
					</div>
				</div>
			</div>
		</>
	);
}
