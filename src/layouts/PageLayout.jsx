import React from "react";

export default function PageLayout({ title, content }) {
	return (
		<div className='pageWrap'>
			<h1 className='pageTitle'>{title}</h1>
			{content}
		</div>
	);
}
