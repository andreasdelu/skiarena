import React from "react";
import Card from "../components/Card";
import lektionsData from "../lektioner.json";
import Loading from "../components/Loading";

export default function Lektioner({ data }) {
	document.title = "SkiArena - Alle lektioner";
	return (
		<div className='pageWrap coursesWrap'>
			<h1 className='pageTitle'>Alle lektioner</h1>
			{data.length ? (
				<>
					<div className='cards-list'>
						{lektionsData.map((item) => (
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
