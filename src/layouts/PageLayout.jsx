import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from "../assets/images/skiarenalogo.svg";

export default function PageLayout({ title, content }) {
	document.title = "SkiArena - " + title;
	return (
		<div className='pageWrap'>
			<h1 className='pageTitle'>{title}</h1>
			{content}
		</div>
	);
}
