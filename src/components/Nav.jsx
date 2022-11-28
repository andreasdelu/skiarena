import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/skiarenalogo.svg";

export default function Nav() {
	return (
		<>
			<nav id='navigation'>
				<Link id='logoWrapper' to={"/"}>
					<img id='logoNav' src={logo} alt='logo' />
				</Link>
				<div id='nav'>
					<p className='menuLink'>Lokation</p>
					<p className='menuLink'>kurser</p>
					<p className='menuLink'>Arrangementer</p>
					<NavLink className='menuLink' to={"/priser"}>
						Priser
					</NavLink>
					<p className='menuLink'>Gavekort</p>
					<p className='menuLink'>Om os</p>
				</div>
				<div id='bookButton'>
					<Link className='ctaButton' to={"/"}>
						Book nu
					</Link>
				</div>
			</nav>
		</>
	);
}
