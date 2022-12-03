import React from "react";
import { Link } from "react-router-dom";

export default function PageInfo({ price, duration, level, type, link }) {
	return (
		<div className='pageInfoWrap'>
			<div className='pageInfoLeft'>
				<ul>
					<li>
						<b>Pris: </b> {price}
					</li>
					<li>
						<b>Varighed: </b> {duration}
					</li>
					<li>
						<b>Type: </b> {type}
					</li>
					<li>
						<b>Anbefalet niveau: </b> {level}
					</li>
				</ul>
			</div>
			<div className='pageInfoRight'>
				<Link className='ctaButton' to={`/booking/${link}`}>
					Book nu
				</Link>
			</div>
		</div>
	);
}
