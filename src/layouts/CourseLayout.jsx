import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from "../assets/images/skiarenalogo.svg";

export default function PageLayout({ title, content, info, data }) {
	document.title = "SkiArena - " + title;
	const imgRef = useRef(null);
	const [pageImg, setPageImg] = useState(logo);
	const [extraClass, setExtraClass] = useState("logoBG");

	const location = useLocation();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, false);
		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, [location]);

	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

	function handleScroll() {
		if (location.pathname === "/") return;
		let windowScroll = (window.scrollY / 2000) * 100;
		imgRef.current.animate(
			[
				{
					backgroundPositionY: 50 + clamp(windowScroll, 0, 50) + "%",
				},
			],
			{
				duration: 1000,
				fill: "forwards",
			}
		);
	}

	function changeImage() {
		for (const item of data) {
			if (item.title === title && item.image !== "") {
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
		changeImage();
	}, [location, data]);

	return (
		<div className='courseWrap'>
			<div className='courseWrapLeft'>
				<h1 className='pageTitle'>{title}</h1>
				<div
					ref={imgRef}
					style={{
						backgroundImage: `url(${pageImg})`,
					}}
					className={"courseInfoImage " + extraClass}></div>
				{info}
				<h3>Information</h3>
				{content}
			</div>
			<div className='courseWrapRight'>{info}</div>
		</div>
	);
}
