import React from "react";
import { HashLink } from "react-router-hash-link";

export default function FirmaArrangement() {
	return (
		<>
			<p>
				Skal personalet udfordres eller forkæles til et firma arrangement? Er
				personaleforeningen løbet tør for ideer? Trænger I til lidt intern
				konkurrence?
			</p>
			<p>
				Så har I nu mulighed for at prøve noget anderledes, sjovt og
				udfordrende!
			</p>
			<p>
				Vi har stor erfaring I at undervise og underholde grupper på ski så alle
				bliver både udfordret og underholdt. selv om niveauet i en gruppe ofte
				svinger fra nybegyndere til øvede så har vi mulighed for at tilpasse
				arrangementet så alle får noget ud af det, enten med fokus på læring og
				teknik eller sjov på ski - oftest vil det være en kombination.
			</p>
			<p>
				Se vores generelle{" "}
				<HashLink to={"/priser#arrangementer"}>
					priser for arrangementer
				</HashLink>
				, men husk at vi kan også skræddersy et arrangement netop til jer.
				Ligegyldigt om det er et firma arrangement, personaleforeningen,
				Polterabend, fødselsdag, Blå mandage eller blot en flot venner der skal
				give den gas.
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
				. Har I behov for at kombinere med lidt firma information kan vi også
				tilbyde mødelokalet{" "}
				<a
					href='https://www.facebook.com/watch/?v=327034244540495'
					target='_blank'
					rel='noreferrer'>
					Paddock Club
				</a>
				.
			</p>
		</>
	);
}
