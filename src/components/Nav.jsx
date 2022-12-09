import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/skiarenalogo.svg";
import LogoWhite from "../assets/images/skiarenalogo-white.svg";
import Arrow from "../assets/images/Arrow.svg";

export default function Nav() {
	const [drop1, setDrop1] = useState(false);
	const [drop2, setDrop2] = useState(false);
	const [drop3, setDrop3] = useState(false);
	const [drop4, setDrop4] = useState(false);
	const navRef = useRef(null);
	const logoRef = useRef(null);

	const location = useLocation();

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

	useEffect(() => {
		window.addEventListener("scroll", handleNavScroll, false);
		return () => {
			window.removeEventListener("scroll", handleNavScroll, false);
		};
	}, [location]);

	function handleNavScroll() {
		if (location.pathname !== "/") return;
		if (navRef.current.classList.contains("onTop")) {
			if (window.scrollY > window.innerHeight * 0.6) {
				navRef.current.classList.remove("onTop");
				logoRef.current.src = Logo;
			}
		} else {
			if (window.scrollY < window.innerHeight * 0.5) {
				navRef.current.classList.add("onTop");
				logoRef.current.src = LogoWhite;
			}
		}
	}

	function closeDropdown(e) {
		if (e.target.tagName === "A") {
			setDrop1(false);
			setDrop2(false);
			setDrop3(false);
			setDrop4(false);
		}
	}

	return (
		<>
			<nav
				ref={navRef}
				className={location.pathname === "/" ? "onTop" : ""}
				id='navigation'>
				<Link id='logoWrapper' to={"/"}>
					<img
						ref={logoRef}
						id='logoNav'
						src={location.pathname === "/" ? LogoWhite : Logo}
						alt='logo'
					/>
				</Link>
				<div id='nav'>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop1)}
						onMouseLeave={() => handleMenuHoverStop(setDrop1)}>
						<Link to={"/kurser"} className='menuLink'>
							Kurser
						</Link>
						<img src={Arrow} alt='Dropdown' />
						{drop1 && (
							<div onClick={closeDropdown} className='dropdownMenu'>
								<NavLink to={"/kurser/basis"}>Basiskursus</NavLink>
								<NavLink to={"/kurser/mini"}>Minikursus</NavLink>
								<NavLink to={"/kurser/familie"}>Familiekursus</NavLink>
								<NavLink to={"/kurser/teknik"}>Teknikkursus</NavLink>
								<NavLink to={"/kurser/firma"}>Firmakursus</NavLink>
								<NavLink to={"/kurser/dds"}>DDS - Forberedende Kursus</NavLink>
							</div>
						)}
					</div>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop2)}
						onMouseLeave={() => handleMenuHoverStop(setDrop2)}>
						<Link to={"/lektioner"} className='menuLink'>
							Lektioner
						</Link>
						<img src={Arrow} alt='Dropdown' />
						{drop2 && (
							<div onClick={closeDropdown} className='dropdownMenu'>
								<NavLink to={"/lektioner/enkelt"}>Enkeltlektion</NavLink>
								<NavLink to={"/lektioner/personlig"}>Personlig Lektion</NavLink>
								<NavLink to={"/lektioner/proeve"}>
									Prøvelektion - 2 pers.
								</NavLink>
								<NavLink to={"/lektioner/3-paa-baandet"}>3 På Båndet</NavLink>
								<NavLink to={"/lektioner/familie"}>Familielektion</NavLink>
								<NavLink to={"/lektioner/gruppe"}>Gruppelektion</NavLink>
								<NavLink to={"/lektioner/snowboard"}>Snowboardlektion</NavLink>
								<NavLink to={"/lektioner/snowboard-familie"}>
									Snowboard - Familielektion
								</NavLink>
							</div>
						)}
					</div>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop3)}
						onMouseLeave={() => handleMenuHoverStop(setDrop3)}>
						<Link to={"/arrangementer"} className='menuLink'>
							Arrangementer
						</Link>
						<img src={Arrow} alt='Dropdown' />
						{drop3 && (
							<div onClick={closeDropdown} className='dropdownMenu'>
								<NavLink to={"/arrangementer/firma"}>Firmaarrangement</NavLink>
								<NavLink to={"/arrangementer/polterabend"}>Polterabend</NavLink>
								<NavLink to={"/arrangementer/blaa-mandag"}>Blå Mandag</NavLink>
							</div>
						)}
					</div>
					<div className='menuItem'>
						<NavLink className='menuLink' to={"/priser"}>
							Priser
						</NavLink>
					</div>
					<div className='menuItem'>
						<NavLink to={"/gavekort"} className='menuLink'>
							Gavekort
						</NavLink>
					</div>
					<div
						className='menuItem'
						onMouseEnter={() => handleMenuHover(setDrop4)}
						onMouseLeave={() => handleMenuHoverStop(setDrop4)}>
						<p className='menuLink'>Om os</p>
						<img src={Arrow} alt='Dropdown' />
						{drop4 && (
							<div onClick={closeDropdown} className='dropdownMenu'>
								<NavLink to={"/faq"}>FAQ</NavLink>
								<NavLink to={"/kontakt"}>Kontakt</NavLink>
								<NavLink to={"/find-vej"}>Find vej</NavLink>
								<NavLink to={"/job"}>Job</NavLink>
								<NavLink to={"/presse"}>Presse</NavLink>
								<NavLink to={"/betingelser"}>Betingelser</NavLink>
							</div>
						)}
					</div>
				</div>
				<div id='bookButton'>
					<Link className='ctaButton' to={"/booking"}>
						Book nu
					</Link>
				</div>
			</nav>
		</>
	);
}
