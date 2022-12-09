import React from "react";
import Card from "../components/Card";
import lektionsData from "../lektioner.json";

export default function Lektioner({ data }) {
	document.title = "SkiArena - Alle lektioner";
	return (
		<div className='pageWrap coursesWrap'>
			<h1 className='pageTitle'>Alle lektioner</h1>
			<div className='cards-list'>
				{data.length ? (
					<>
						{lektionsData.map((item) => (
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
					<p>Loading</p>
				)}
			</div>
		</div>
	);
}
