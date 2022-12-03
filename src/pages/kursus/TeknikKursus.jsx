import React from "react";
import PageInfo from "../../components/PageInfo";

import image from "../../assets/images/BasisKursus.jpeg";

export default function TeknikKursus() {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='pageInfoImage'></div>
			<PageInfo
				price={"1.795 el. 2.495 kr. pr. person"}
				duration={"6 el. 9 lektioner på 90 minutter"}
				level={"Nybegynder - Øvet"}
				type={"Ski"}
				link={"teknikkursus"}
			/>
			<h3>Information</h3>
			<p>
				Dette er ski teknik kurset for dig, der enten virkelig ønsker at
				forbedre dit skiløb eller blot lære det helt fra bunden! <br /> <br />{" "}
				Uanset om du har mange års ski erfaring eller er helt nybegynder, så vil
				du få noget ud af dette kursus, da de er individuelt tilpassede. Der
				arbejdes både med korrekt ski teknik, teori og masser af praktisk
				skiløb. Kurset er med 2 timers meget intensivt skiløb om ugen i 6 eller
				9 uger. <br /> <br /> Du kan være sikker på, at der bliver kigget efter
				dig på pisterne efter kurset.
			</p>
		</>
	);
}
