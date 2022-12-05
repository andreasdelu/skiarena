import React from "react";
import PageInfo from "../../components/PageInfo";

import image from "../../assets/images/BasisKursus.jpeg";

export default function IntroKursus() {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='pageInfoImage'></div>
			<PageInfo
				price={"550 kr. pr. person"}
				duration={"2 lektioner på 90 minutter"}
				level={"Nybegynder"}
				type={"Ski"}
				link={"introkursus"}
			/>
			<h3>Information</h3>
			<p>
				Hos SkiArena er alle velkomne - derfor tilbyder vi intro kursus til alle
				vores førstegangs-besøgende kunder. Intro-kurset indeholder 2
				enkeltstående lektioner, hver bestående af 90 minutter med din
				instruktør og min. 3x10 minutter på båndet. <br /> <br /> Selve kurset
				indeholder både leje af ski, støvler og hjelm samt vejledning og
				instruktion ved vores professionelle instruktører. Intro-kurset er to
				lektioner på ski, du sparer derfor i forhold til at købe to enkelte
				lektioner. <br /> <br /> Vi glæder os til at byde dig velkommen i
				SkiArena!
			</p>
		</>
	);
}
