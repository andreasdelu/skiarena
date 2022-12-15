import React from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import arrangementData from "../Arrangementer.json";

export default function Arrangementer({ data }) {
	document.title = "SkiArena - Alle Arrangementer";
	return (
		<div className='pageWrap coursesWrap'>
			<h1 className='pageTitle'>Alle Arrangementer</h1>
			{data.length ? (
				<>
					<div className='cards-list'>
						{arrangementData.map((item) => (
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
