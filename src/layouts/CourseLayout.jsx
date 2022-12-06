import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from "../assets/images/skiarenalogo.svg";

export default function PageLayout({ title, content, info, data }) {
	document.title = "SkiArena - " + title;
	const [pageImg, setPageImg] = useState(logo);
	const [extraClass, setExtraClass] = useState("logoBG");

	const location = useLocation();

	const URL = "https://skiarena-admin.delu.dk/wp-json/wp/v2/posts?slug=";

	/* async function fetchWPDImage() {
		title = title.replaceAll(" ", "-");
		let queryUrl = URL + title.toLowerCase() + "&_embed";
		console.log(queryUrl);

		const res = await fetch(queryUrl);
		const data = await res.json();
		if (data.length) {
			setPageImg(data[0]._embedded["wp:featuredmedia"][0].source_url);
			setExtraClass("");
		} else {
			setPageImg(logo);
			setExtraClass("logoBG");
		}
	} */

	function changeImage() {
		let slug = title.replaceAll(/[\s-]/g, "-").toLowerCase();
		for (const item of data) {
			if (item.slug === slug) {
				setExtraClass("");
				setPageImg(item.image);
				return;
			}
		}
		setPageImg(logo);
		setExtraClass("logoBG");
	}

	useEffect(() => {
		setPageImg(logo);
		setExtraClass("logoBG");
		/* fetchWPDImage(); */
		changeImage();
	}, [location, data]);

	return (
		<div className='courseWrap'>
			<div className='courseWrapLeft'>
				<h1 className='pageTitle'>{title}</h1>
				<div
					style={{ backgroundImage: `url(${pageImg})` }}
					className={"courseInfoImage " + extraClass}></div>
				{info}
				<h3>Information</h3>
				{content}
			</div>
			<div className='courseWrapRight'>{info}</div>
		</div>
	);
}
