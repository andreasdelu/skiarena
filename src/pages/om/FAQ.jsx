import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
	useEffect(() => {
		window.addEventListener("click", toggleAllDetails, false);

		return () => {
			window.removeEventListener("click", toggleAllDetails, false);
		};
	}, []);

	function toggleAllDetails(e) {
		e.preventDefault();
		if (e.target.tagName === "SUMMARY") {
			let details = document.querySelectorAll("details");
			details.forEach((d) => {
				if (d === e.path[1]) {
					e.path[1].open = !e.path[1].open;
					if (e.path[1].open) {
						let headerOffset = 80;
						let elementPosition = e.path[1].getBoundingClientRect().top;
						let offsetPosition =
							elementPosition + window.pageYOffset - headerOffset;
						window.scrollTo({
							top: offsetPosition,
							behavior: "smooth",
						});
					}
				} else {
					d.open = false;
				}
			});
		}
	}

	return (
		<>
			<p style={{ textAlign: "center", marginBottom: 50 }}>
				Nedenfor har vi samlet nogle af de typiske spørgsmål ved besøg i
				SkiArena. <br /> Har du yderligere spørgsmål kan du altid{" "}
				<Link to={"/kontakt"}>kontakte os</Link>
			</p>
			<details>
				<summary>Hvad er SkiArena?</summary>
				<p>
					SkiArena er et indendørs skicenter i det sydlige Århus. Vi tilbyder
					seriøs og sjov skitræning på de endeløse pister, hvor du aldrig når
					bunden - du kan blive ved og ved med at køre. Vi kan justere både
					hældning på bakken og farten så vi på den måde kan tilpasse niveauet
					netop til dig, uanset om du er begynder, øvet eller skiløber med mange
					års erfaring.
				</p>
				<p>
					Teknologien og konceptet er baseret på Maxx-Tracks systemet - et mere
					end 25 år gammelt Hollandsk koncept, som pt. er at finde overalt på
					jorden, fra Århus over Capetown til Hong Kong. Alene i Holland findes
					der over 60 centre. Centrene bliver brugt både for at lære nye
					skiløbere at stå på ski, og bruges af eksperter og professionelle til
					at forbedre og træne deres skiløb.
				</p>
				<p>
					De endeløse bakker vi har i SkiArena kan bedst sammenlignes med en
					ny-præpereret piste. Når du lige har vænnet dig til fornemmelsen af at
					stå på båndet, kommer det meget hurtigt til at føles som en rigtig
					piste. Båndet har dog den fordel (eller ulempe om man vil) at det
					tilgiver ikke. Fejl vises meget tydelig og lige som på pisterne kan
					man også falde, så instruktøren er altid klar til at stoppe båndet.
				</p>
				<p>
					Vi glæder os til at se dig i SkiArena til både seriøs og sjov træning
					på ski.
				</p>
			</details>
			<details>
				<summary>Hvad er en lektion?</summary>
				<p>
					En ski-lektion i SkiArena varer en time. Kom minimum 15 min. før
					lektionen starter, så vi kan finde udstyr og ski til dig.
				</p>
				<p>
					Når du møder op bliver du registreret i receptionen, derefter går du
					med instruktøren ind i skihallen, hvor I finder udstyr, ski, støvler
					og hjelm. Instruktøren hjælper dig med at indstille dine ski så de
					passer til støvlerne.
				</p>
				<p>
					Der kan være 3 deltagere på båndet samtidig, og vi sørger naturligvis
					for, at I inddeles efter niveau.
				</p>
				<p>
					Når du er klar på båndet, kører du i 10 minutter med kyndig vejledning
					fra en af vores instruktører. Der kan være korte stop undervejs for
					fejlretning og information. Når de 10 minutter er gået, er der 10
					minutters pause, hvor næste hold kommer på båndet. Derefter bytter I
					igen og sådan foregår det, indtil I samlet har kørt en time på båndet
					(30 min. kørsel og 30 min. pause).
				</p>
				<p>
					Herefter er det tid til at få instruktørens kommentarer og gode råd
					til videre træning samt aflevering af udstyr.
				</p>
				<p>
					<b>Vidste du:</b> <br /> - at én lektion på båndet svarer effektivt
					til en kort dag på ski, da det er meget koncentreret træning?
				</p>
			</details>
			<details>
				<summary>Er det for alle?</summary>
				<p>
					SkiArena i Aarhus er for alle. Alle er velkommen og alle kan stå på
					ski hos os - både unge og gamle, nybegyndere og øvede osv. Nedenfor
					finder du kort information om de forskellige grupper.
				</p>
				<p>
					<b>Børn & voksne</b> <br /> <br />
					Uanset om du er barn eller voksen, om det skal være seriøst eller
					sjovt, er SkiArena noget for dig. For de voksne kan det både være
					seriøs træning eller sjov. For de mindste er leg en del af det at stå
					på ski og det er naturligvis også noget vi arbejder med børnene.
					Læring gennem smil og leg. Hele familien kan træne sammen med vores
					familielektioner - disse finder du under priser.
				</p>
				<p>
					<b>Ny på ski</b> <br /> <br />
					Som nybegynder kan du få en fornemmelse af hvad det vil sige at stå på
					ski. Du kommer til at lære hvordan du svinger, bremser og får kontrol
					med skiene, allerede inden du første gang skal ud på de rigtige
					pister. Du får trænet de rigtige muskler og kommer i bedre form til
					skiferien. Ingen fortræning til skiløb er så godt… som skiløb.
				</p>
				<p>
					<b>Øvet</b> <br /> <br />
					Som øvet skiløber får du mulighed for at forbedre dit skiløb. Vores
					dygtige og veluddannede instruktører holder øje med din teknik og
					kommer med gode råd til, hvad du skal arbejde med for at blive endnu
					bedre og få endnu mere kontrol over dit skiløb. Du har mulighed for at
					se dig selv i spejlet foran bakken, så du også selv kan se hvad det er
					du skal ændre på i dit skiløb.
				</p>
				<p>
					<b>Ekspert</b> <br /> <br />
					Selv de dygtigste skiløbere kan blive bedre, og hvis du er ekspert med
					mange års skiløb på bagen, er der ganske sikkert stadig små
					justeringer du kan arbejde med for at blive endnu bedre. På det
					endeløse bånd har du mulighed for at køre det samme sving igen og
					igen, indtil det er helt perfekt. Du kan koncentrere dig 100% om en
					enkelt bevægelse og finjustere dit skiløb til perfektion, naturligvis
					vejledt af en af vores instruktører.
				</p>
			</details>
			<details>
				<summary>Hvad skal jeg tage på af tøj?</summary>
				<p>
					Det bedste er at tage løstsiddende tøj på så du har mulighed for at
					bevæge dig. Skiløb er en fysisk krævende aktivitet og har brug for at
					kunne bevæge dig. Skihallen er ikke opvarmet og derfor kan der I
					vinterperioden godt blive koldt. Der kan være lidt ventetid, derfor
					anbefaler vi at du tager en jakke på, så du kan holde varmen mens du
					venter.
				</p>
				<p>
					Vi anbefaler desuden lange bukser og en langærmet trøje som beskytter
					dig hvis du vælter.
				</p>
			</details>
			<details>
				<summary>Er det muligt at klæde om i SkiArena?</summary>
				<p>
					Ja; SkiArena deler omklædningsrum med Racehall - så der er naturligvis
					mulighed for omklædning. Dog er der ikke badefaciliteter.
				</p>
			</details>
			<details>
				<summary>Kan jeg bruge mine egne ski?</summary>
				<p>
					Skiene i SkiArena er kantslebet så de passer til de indendørs bakker.
					Dine ski er slebet så de passer til sneen. Man skal derfor bruge
					SkiArenas egne ski.
				</p>
			</details>
			<details>
				<summary>Tilbyder I også snowboard træning?</summary>
				<p>
					Ja, der er også mulighed for at benytte snowboard på vores bakker.
					Ligesom med ski kan du ikke benytte dit eget board - ellers er der
					ingen forskel. Dog skal du være opmærksom på, at snowboard træning på
					båndet kræver tilvænning. Vi kan heller ikke tilbyde snowboard træning
					på alle tidspunkter. Ring eller skriv til os. Så finder vi en tid,
					hvor vores snowboard instruktører er ledige.
				</p>
				<p>
					En del helt nye snowboardere prøvede deres første sving i SkiArena i
					sæsonen 2016-2017, og fik faktisk lært det basale hjemmefra. Det
					gjorde det meget nemmere, da de kom på sne.
				</p>
				<p>
					Vi arbejder i øjeblikket på, at lave et sommerhold for “2.
					glide-redskab”. Dvs. et kursus for dig der er vant til at stå på ski -
					men nu ønsker at udvide din kunnen, til også at omfatte snowboard. Da
					det er lidt svære at lære at stå på snowboard i SkiArena, vil det
					blive sat op som et teknikkursus. Dvs. med flere træninger, så det
					grundlæggende kan læres ordentligt. Læs mere under Teknik-kurser på
					forsiden.
				</p>
			</details>
			<details>
				<summary>Kan jeg bruge mine egne støvler?</summary>
				<p>
					Ja, du kan bruge dine egne støvler, hjelm og andet udstyr. Vi har
					naturligvis også både hjelm og støvler du kan låne - og det er
					inkluderet I prisen.
				</p>
				<p>
					Faktisk anbefaler flere ski-butikker, at du tager dine nye ski-støvler
					med ud i SkiArena og får dem mærket efter inden din (dyre) tur til
					sneen. På den måde kan de tilrette støvlen, så den sidder perfekt….
					når du kører rigtigt på ski - og ikke bare inden på skibutikkens
					udstillings-gulv. Kom ud og prøv dit nye udstyr hos os.
				</p>
			</details>
			<details>
				<summary>Skal jeg have hjelm på?</summary>
				<p>
					Ja, hjelm er påkrævet på skibakken for din egen sikkerheds skyld. Vi
					har skihjelme du kan låne - og det er inkluderet i prisen.
				</p>
			</details>
		</>
	);
}
