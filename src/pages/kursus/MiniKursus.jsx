import React from "react";

import image from "../../assets/images/BasisKursus.jpeg";
import PageInfo from "../../components/PageInfo";

export default function MiniKursus() {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='pageInfoImage'></div>
			<PageInfo
				price={"750 kr. pr. person (Højsæson: 850 kr)"}
				duration={"3 lektioner på 90 minutter"}
				level={"Let øvet - Øvet"}
				type={"Ski"}
				link={"introkursus"}
			/>
			<h3>Information</h3>
			<p>
				For dig der skal have støvet sommeren rust af, og køre dig klar til din
				store skiferie. Mini-kurset kører fra 3 gange til lige så mange gange du
				vil (for når først du kommer igang - kan du slet ikke stoppe igen).{" "}
				<br />
				<br />
				Helårs-skiløb er vidunderligt. Når først du har købt et Basis-kursus
				eller et Mini-kursus, må du komme for samme pris resten af sæsonen! I
				gennemsnit stod folk på ski 6-7 gange i sidste sæson.
				<br />
				<br /> Mini-kursus bruges også, til at køre sig klar til det helt store
				og fede kursus: Teknikholdene.
			</p>
		</>
	);
}
