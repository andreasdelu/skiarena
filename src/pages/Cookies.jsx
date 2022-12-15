import React, { useEffect, useRef } from "react";

export default function Cookies() {
	const declarationRef = useRef(null);
	useEffect(() => {
		const ref = declarationRef.current;
		const script = document.createElement("script");

		script.src =
			"https://consent.cookiebot.com/e471a62b-6871-470d-8923-b25ee5b2691e/cd.js";
		script.async = true;

		if (ref.innerHTML === "") {
			ref.appendChild(script);
		}
	}, []);
	return (
		<>
			<div id='cookieWrap'>
				<h1 className='pageTitle'>Cookie- og privatlivspolitik</h1>
				<h3>Introduktion</h3>
				<div id='CookieDeclaration' ref={declarationRef}></div>
				<h2>Personoplysninger</h2>
				<h3>Generelt</h3>
				Personoplysninger er alle slags informationer, der i et eller andet
				omfang kan henføres til dig. Når du benytter vores website indsamler og
				behandler vi en række sådanne informationer. Det sker f.eks. ved alm.
				tilgang af indhold, hvis du tilmelder dig vores nyhedsbrev, deltager i
				konkurrencer eller undersøgelser, registrerer dig som bruger eller
				kursist, øvrig brug af services eller foretager køb via websitet. <br />{" "}
				<br /> Vi indsamler og behandler typisk følgende typer af oplysninger:
				Et unikt ID og tekniske oplysninger om din computer, tablet eller
				mobiltelefon, dit IP-nummer, geografisk placering, samt hvilke sider du
				klikker på (interesser). I det omfang du selv giver eksplicit samtykke
				hertil og selv indtaster informationerne behandles desuden: Navn,
				telefonnummer, e-mail, adresse og betalingsoplysninger. Det vil typisk
				være i forbindelse med oprettelse af login eller ved køb. <br /> <br />
				<h3>Sikkerhed</h3>
				Vi har truffet tekniske og organisatoriske foranstaltninger mod, at dine
				oplysninger hændeligt eller ulovligt bliver slettet, offentliggjort,
				fortabt, forringet eller kommer til uvedkommendes kendskab, misbruges
				eller i øvrigt behandles i strid med lovgivningen. <br /> <br />
				<h3>Formål</h3>
				Oplysningerne bruges til at identificere dig som bruger, at registrere
				dine køb og betalinger, samt at kunne levere de services, du har
				efterspurgt, forberede vores instruktører på din næste lektion og
				generel kontakt til dig, som f.eks. at fremsende et nyhedsbrev.
				Herudover anvender vi oplysningerne til at optimere vores services og
				indhold. <br /> <br />
				<h3>Periode for opbevaring</h3>
				Oplysningerne opbevares i det tidsrum, der er tilladt i henhold til
				lovgivningen, og vi sletter dem, når de ikke længere er nødvendige.
				Perioden afhænger af karakteren af oplysningen og baggrunden for
				opbevaring. Det er derfor ikke muligt at angive en generel tidsramme
				for, hvornår informationer slettes. Du kan til enhver tid bede os om
				fuldstændigt at slette alle oplysninger vi har om dig. <br /> <br />
				<h3>Videregivelse af oplysninger</h3>
				Data om din brug af websitet, hvilke links på skiArena.dk du klikker på,
				geografisk placering, køn og alderssegment m.v. videregives til
				tredjeparter i det omfang disse oplysninger er kendt. Du kan se hvilke
				tredjeparter, der er tale om, i afsnittet om ”Cookies” ovenfor.
				Oplysningerne anvendes til målretning af annoncering. <br /> <br /> Vi
				benytter herudover en række tredjeparter til opbevaring og behandling af
				data. Disse behandler udelukkende oplysninger på vores vegne og må ikke
				anvende dem til egne formål. <br /> <br /> Videregivelse af
				personoplysninger som navn og e-mail m.v. vil kun ske, hvis du giver
				samtykke til det. Vi anvender kun databehandlere i EU eller i lande, der
				kan give dine oplysninger en tilstrækkelig beskyttelse. <br /> <br />
				<h3>Indsigt og klager</h3>
				Du har ret til at få oplyst, hvilke personoplysninger, vi behandler om
				dig. Du kan desuden til enhver tid gøre indsigelse mod, at oplysninger
				anvendes. Du kan også tilbagekalde dit samtykke til, at der bliver
				behandlet oplysninger om dig. Hvis de oplysninger, der behandles om dig,
				er forkerte har du ret til at de bliver rettet eller slettet.
				Henvendelse herom kan ske til os via vores kontaktformular. Hvis du vil
				klage over vores behandling af dine personoplysninger, har du også
				mulighed for at tage kontakt til Datatilsynet.
				<h3>Udgiver</h3>
				Websitet ejes og publiceres af: <br /> <br /> SkiInvest A/S <br />{" "}
				Hasselager Centervej 30 <br /> 8260 Viby J <br /> Telefon: 2594 8777
			</div>
		</>
	);
}
