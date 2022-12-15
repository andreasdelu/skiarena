import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/error.svg";

export default function Error() {
	return (
		<div className='pageWrap'>
			<h1 className='pageTitle'>Fejl 404</h1>
			<p style={{ textAlign: "center", maxWidth: 600, margin: "0px auto" }}>
				Du er ved at forlade pistområdet! <br /> Ingen af pisterne i dette
				område er preppererede, eller certificerede til brug af sidens
				skiløbere. For din egen sikkerheds skyld, burde du vende om til
				sikkerheden!{" "}
			</p>
			<img
				style={{
					width: "100%",
					maxWidth: 120,
					margin: "30px auto",
					display: "block",
				}}
				src={error}
				alt='error'
			/>
			<Link
				to={"/"}
				style={{
					margin: "40px auto",
					display: "block",
				}}
				className='ctaButton'>
				Tilbage til pisten
			</Link>
		</div>
	);
}
