import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo from "../assets/images/skiarenalogo.svg";

export default function PageLayout({ wrapId = "", title, content }) {
	document.title = "SkiArena - " + title;
	return (
		<div id={wrapId} className='pageWrap'>
			<h1 className='pageTitle'>{title}</h1>
			{content}
		</div>
	);
}
