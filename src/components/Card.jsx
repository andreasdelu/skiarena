import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import divider from "../assets/images/divider.svg";

export default function Card(props) {
	const navigate = useNavigate();

	const [coverImg, setCoverImg] = useState("");

	useEffect(() => {
		/* let slug = props.titel.replaceAll(/[\s-]/g, "-").toLowerCase(); */

		for (const post of props.wpData) {
			if (props.titel === post.title) {
				setCoverImg(post.image);
			}
		}
	}, []);

	return (
		<>
			<div onClick={() => navigate(props.link)} className='card'>
				<div
					style={{ backgroundImage: `url(${coverImg})` }}
					className='card--image'></div>
				<div className='card--stats'>
					<img className='card--divider' src={divider} alt='divider' />
					<h4 className='card--title'>{props.titel}</h4>
					<hr />
					<p className='card--description'>{props.description}</p>
					<p className='card--price'>
						<b>Priser fra: {props.price},-</b>
					</p>
				</div>
			</div>
		</>
	);
}
