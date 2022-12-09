import React from "react";
import { Link } from "react-router-dom";

export default function PageInfo({
	priceHigh,
	priceLow,
	persons,
	duration,
	level,
	type,
	link,
	extraStyle = "",
}) {
	return (
		<div className={"pageInfoWrap" + extraStyle}>
			<div className='pageInfoLeft'>
				<ul>
					<li>
						<b>Pris: </b> {priceLow}
					</li>
					<li>
						<b>Pris - Højsæson: </b> {priceHigh}
					</li>
					<li>
						<b>Antal personer: </b> {persons}
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
				<small>
					<i>Højsæson: Uge 52 - Uge 8</i>
				</small>
			</div>
			<div className='pageInfoRight'>
				<Link className='ctaButton' to={`/booking`}>
					Book nu
				</Link>
			</div>
		</div>
	);
}
