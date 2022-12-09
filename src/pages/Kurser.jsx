import React from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import kursusData from "../Kurser.json";

export default function Kurser({ data }) {
	document.title = "SkiArena - Alle Kurser";
	return (
		<div className='pageWrap coursesWrap'>
			<h1 className='pageTitle'>Alle Kurser</h1>
			<div className='cards-list'>
				{!data.length ? (
					<>
						{kursusData.map((item) => (
							<Card
								id={item.id}
								titel={item.titel}
								description={item.description}
								price={item.price}
								link={item.link}
								wpData={data}
							/>
						))}
					</>
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
}
