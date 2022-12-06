import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageInfo from "../components/PageInfo";

export default function PageLayout2({ pageData }) {
	const { page } = useParams();

	const [data, setData] = useState([]);

	useEffect(() => {
		pageData.forEach((post) => {
			if (post.data.url === page) {
				setData(post);
				console.log(post);
			}
		});
	}, [page, pageData]);

	return (
		<div className='pageWrap'>
			{data && (
				<>
					<h1 className='pageTitle'>{data?.title}</h1>
					<div
						style={{ backgroundImage: `url(${data?.image})` }}
						className='pageInfoImage'></div>
					<PageInfo
						priceLow={data?.data?.priceLow}
						priceHigh={data?.data?.priceHigh}
						persons={data?.data?.persons}
						duration={data?.data?.duration}
						level={data?.data?.level}
						type={data?.data?.type}
						link={data?.data?.navName.toLowerCase()}
					/>
					<h3>Information</h3>
					<p dangerouslySetInnerHTML={{ __html: data?.body }}></p>
				</>
			)}
		</div>
	);
}
