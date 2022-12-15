import React from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import kursusData from "../Kurser.json";

export default function Kurser({ data }) {
	document.title = "SkiArena - Alle Kurser";
	return (
		<div className='pageWrap coursesWrap'>
			<h1 className='pageTitle'>Alle Kurser</h1>
			{data.length ? (
				<>
					<div className='cards-list'>
						{kursusData.map((item) => (
							<Card
								key={item.id}
								id={item.id}
								titel={item.titel}
								description={item.description}
								price={item.price}
								link={item.link}
								wpData={data}
							/>
						))}
					</div>
				</>
			) : (
				<Loading />
			)}
		</div>
	);
}
