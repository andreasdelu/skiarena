import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
	const navigate = useNavigate();
	return (
		<>
			<div onClick={() => navigate(props.link)} className='card'>
				<img src={props.coverImg} className='card--image' alt={props.title} />
				<div className='card--stats'>
					<h4 className='card--title'>{props.title}</h4>
					<p className='card--title'>{props.description}</p>
					<p className='card--price'>{props.price}</p>
				</div>
			</div>
		</>
	);
}
