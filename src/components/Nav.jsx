import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/skiarenalogo.svg";
import Arrow from "../assets/images/Arrow.svg";

export default function Nav() {
	return (
		<>
			<nav id='navigation'>
				<Link id='logoWrapper' to={"/"}>
					<img id='logoNav' src={Logo} alt='logo' />
				</Link>
				<div id='nav'>
					<div className='menuItem'>
						<p className='menuLink'>Kurser</p>
						<img src={Arrow} alt='Dropdown' />
					</div>
					<div className='menuItem'>
						<p className='menuLink'>Lektioner</p>
						<img src={Arrow} alt='Dropdown' />
						<div className='dropdownMenu'>
							<NavLink to={"/kurser/familie"}>Familie</NavLink>
							<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
						</div>
					</div>
					<div className='menuItem'>
						<p className='menuLink'>Arrangementer</p>
						<img src={Arrow} alt='Dropdown' />
					</div>
					<NavLink className='menuLink' to={"/priser"}>
						Priser
					</NavLink>
					<p className='menuLink'>Gavekort</p>
					<div className='menuItem'>
						<p className='menuLink'>Om os</p>
						<img src={Arrow} alt='Dropdown' />
					</div>
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
