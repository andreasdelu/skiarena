import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/skiarenalogo.svg";
import Arrow from "../assets/images/Arrow.svg";

export default function Nav() {
	const [drop1, setDrop1] = useState(false);
	const [drop2, setDrop2] = useState(false);
	const [drop3, setDrop3] = useState(false);
	const [drop4, setDrop4] = useState(false);

	let hoverTimeout;

	function handleMenuHover(state) {
		setDrop1(false);
		setDrop2(false);
		setDrop3(false);
		setDrop4(false);
		state(true);
		clearTimeout(hoverTimeout);
	}
	function handleMenuHoverStop(state) {
		hoverTimeout = setTimeout(() => {
			state(false);
		}, 500);
	}

	return (
		<>
			<nav id='navigation'>
				<Link id='logoWrapper' to={"/"}>
					<img id='logoNav' src={Logo} alt='logo' />
				</Link>
				<div id='nav'>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop1)}
						onMouseLeave={() => handleMenuHoverStop(setDrop1)}>
						<p className='menuLink'>Kurser</p>
						<img src={Arrow} alt='Dropdown' />
						{drop1 && (
							<div className='dropdownMenu'>
								<NavLink to={"/kurser/familie"}>Kurser</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
							</div>
						)}
					</div>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop2)}
						onMouseLeave={() => handleMenuHoverStop(setDrop2)}>
						<p className='menuLink'>Lektioner</p>
						<img src={Arrow} alt='Dropdown' />
						{drop2 && (
							<div className='dropdownMenu'>
								<NavLink to={"/kurser/familie"}>Lektioner</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
							</div>
						)}
					</div>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop3)}
						onMouseLeave={() => handleMenuHoverStop(setDrop3)}>
						<p className='menuLink'>Arrangementer</p>
						<img src={Arrow} alt='Dropdown' />
						{drop3 && (
							<div className='dropdownMenu'>
								<NavLink to={"/kurser/familie"}>Arrangementer</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
							</div>
						)}
					</div>
					<NavLink className='menuLink' to={"/priser"}>
						Priser
					</NavLink>
					<p className='menuLink'>Gavekort</p>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop4)}
						onMouseLeave={() => handleMenuHoverStop(setDrop4)}>
						<p className='menuLink'>Om os</p>
						<img src={Arrow} alt='Dropdown' />
						{drop4 && (
							<div className='dropdownMenu'>
								<NavLink to={"/kurser/familie"}>Om os</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
								<NavLink to={"/kurser/Gruppe"}>Gruppe</NavLink>
							</div>
						)}
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
