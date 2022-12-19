import React from "react";

import { HashLink } from "react-router-hash-link";

export default function GruppeLektion() {
	return (
		<>
			<b>
				Se alle gruppepriser her:{" "}
				<HashLink to={"/priser#arrangementer"}>Priser</HashLink>
			</b>
			<p>
				På skiferier er man oftest samlet i en gruppe - derfor tilbyder SkiArena
				også gruppelektioner.
			</p>
			<p>
				Gruppelektionen er på 1,5 time og giver jer 60 minutter på båndet - i
				bestemmer selv hvem der står med hvem, hvor længe og hvorfor.
				Gruppelektionen indeholder desuden leje af ski, støvler og hjelm til
				alle samt instruktion ved vores professionelle instruktører.
			</p>
		</>
	);
}
