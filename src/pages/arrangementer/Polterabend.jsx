import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Polterabend() {
	return (
		<>
			<p>
				Overrask den kommende brud eller brudgom med en sjov oplevelse på ski.
				Det er med garanti ikke noget de forventer!
			</p>
			<p>Vi tilbyder to muligheder for Polterabend i SkiArena</p>
			<b>Brud eller gom alene på båndet:</b>
			<p>
				En sjov udfordring for den udkårne og et godt grin for alle. Varighed 30
				min, med garanti for underholdning!
			</p>
			<b>Kun 650 kr.</b>
			<br />
			<br />
			<b>For hele selskabet:</b>
			<p>
				Book et bånd til gruppen, få et godt grin når bruden/gommen forsøger sig
				på ski - eller se måbende til når han/hun visser jer andre, hvordan
				sådan et par ski skal styres ned af bakken i fin stil. (Vi har også
				kælk).
			</p>
			<p>
				Arrangementet er for alle, uanset om I aldrig har stået på ski eller er
				eksperter, og skal der være lidt konkurrence moment med, så har vi også
				nogle ideer.
			</p>
			<HashLink to={"/priser#arrangementer"}>Se Gruppepriser</HashLink>
			<br />
			<p>
				Til tiden skal ligges en halv time til brug for: 15 min. opstart/udstyr
				og 15 min. til afslutning/vask af udstyr.
			</p>
			<b>Fra 6 personer</b>
			<p>
				Vores arrangementer tilbyder vi fra 6 personer og opefter (vi har
				kapacitet til ca 12 per./time), så er I f.eks 24 personer så varer det 2
				timer. I har jeres egen instruktør (en pr. bånd). Et arrangement til 6
				personer i en time koster 1.500 og er inklusiv udstyr. Er I flere end 24
				personer kan vi også klare det så anbefaler vi dog lidt forskudt
				mødetid.
			</p>
			<b>Kombinationer</b>
			<p>
				Vi har mulighed for at kombinere et arrangement med f.eks. en menu i{" "}
				<a href='https://dinerslounge.dk/' target='_blank' rel='noreferrer'>
					Diner's Lounge
				</a>
				, Go-kart racing i{" "}
				<a href='http://www.racehall.com/' target='_blank' rel='noreferrer'>
					Racehall
				</a>{" "}
				eller en sang i{" "}
				<a href='https://www.voicehall.dk/' target='_blank' rel='noreferrer'>
					Voice Hall
				</a>
			</p>
		</>
	);
}
