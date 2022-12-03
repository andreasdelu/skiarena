import React from "react";
import PageInfo from "../../components/PageInfo";
import image from "../../assets/images/dds.png";

export default function DDSKursus() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${image})`,
					backgroundPosition: "center",
				}}
				className='pageInfoImage'></div>
			<PageInfo
				price={"1.795 el. 2.495 kr. pr. person"}
				duration={"6 el. 9 lektioner på 90 minutter"}
				level={"Nybegynder - Øvet"}
				type={"Ski"}
				link={"introkursus"}
			/>
			<h3>Information</h3>
			<p>
				For dig der skal til ski-instruktør eksamen eller på Teknikhold på
				Hintertux med Den Danske Skiskole uge 41 eller uge 42 (efterår) eller
				foråret (eller DDS teknikkursus/Workshop), eller for dig, der er øvet
				eller ekspert-skiløber, og som ønsker at nørde noget mere med dit
				skiløb. <br />
				<br /> Der vil i forbindelse med din BSI1, BSI2 eller PSI3 eksamen i
				Hintertux uge 41 eller uge 42 og ugen i foråret, igen i år være vores
				berømte forberedende “bliv-ski-instruktør”, Teknikkursus i SkiArena. Din
				underviser bliver som altid én af vores dygtigste instruktører, som
				kender til alt på Hintertux.
				<br />
				<br />
				Kurset strækker sig over 6 uger med 2 timers ugentlig træning. Kurset er
				for de øvede skiløbere der har en ski-instruktør i maven eller vil vide
				alt om skiløb - både teoretisk og i praksis. Der bliver mulighed for at
				deltage i DDS teoriprøve undervejs. Teori-prøven bliver afholdt ca. 3-4
				uger før rejsen i SkiArena. Underviser: Rasmus Lundby eller andre
				uddannere fra Den Danske Skiskole. Du skal tilmelde dig hos DDS. <br />
				<br />
				<b>Hvornår:</b> <br />
				UGE 42-holdene: For dig der skal til Hintertux uge 41 eller uge 42
				starter kurset i uge 36. Der køres 6-7 gange inden DDS eksamen på
				Hintertux. UGE 20-holdene: For dig der skal til Hintertux i forårsugen i
				maj starter i uge 12. Der køres 6-7 gange inden DDS eksamen på
				Hintertux. Til start er der hold mandage og onsdage, men så snart
				holdene er fyldte, åbner tirsdag eller torsdagshold. Kl. 17.30-19.30
				(stadig ledige pladser). Kl. 20.00-22.00 (få pladser). Der bliver nok
				også lavet et hold mere end anden ugedag. Når de 2 hold er fyldt. Skriv
				til os, med forslag til de uge-dage du kan bedst. NB. Det er ikke et
				krav at du skal på Tux med Den Danske Skiskole for at deltage. Er du i
				tvivl om dit niveau kan du evt kontakte vores chefinstruktør Martin
				Faber på mf@skiarena.dk eller tlf. 30 32 12 30 inden du tilmelder dig.
			</p>
		</>
	);
}
