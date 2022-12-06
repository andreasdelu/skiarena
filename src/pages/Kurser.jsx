import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchWPData } from "../services/wpFetcher";

export default function Kurser() {
	const [kursusData, setKursusData] = useState([]);
	const [loading, setLoading] = useState([]);

	async function getData() {
		let data = await fetchWPData(
			"https://skiarena-admin.delu.dk/wp-json/wp/v2/posts?_embed",
			"Kursus"
		);
		console.log(data);
		setKursusData(data);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='pageWrap'>
			<h1 className='pageTitle'>Alle Kurser</h1>
			<div className='cards-list'>
				{kursusData.map((data, i) => (
					<Card
						key={i}
						link={data.data.url}
						coverImg={data.image}
						title={data.title}
						description={data.data.descriptionShort}
						price={data.data.priceLow}
					/>
				))}
			</div>
		</div>
	);
}
