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
	const [mobileDrop1, setMobileDrop1] = useState(false);
	const [mobileDrop2, setMobileDrop2] = useState(false);
	const [mobileDrop3, setMobileDrop3] = useState(false);
	const [mobileDrop4, setMobileDrop4] = useState(false);
	const navRef = useRef(null);
	const logoRef = useRef(null);
	const burgerNavRef = useRef(null);
	const burgerIconRef = useRef(null);

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
		setDrop1(false);
		setDrop2(false);
		setDrop3(false);
		setDrop4(false);
		if (burgerNavRef.current.classList.contains("burgerActive")) {
			openMobileNav();
		}

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
			openMobileNav();
		}
	}

	function openMobileNav() {
		setMobileDrop1(false);
		setMobileDrop2(false);
		setMobileDrop3(false);
		setMobileDrop4(false);
		if (burgerNavRef.current.classList.contains("burgerActive")) {
			burgerNavRef.current.classList.remove("burgerActive");
		} else {
			burgerNavRef.current.classList.add("burgerActive");
		}
		if (burgerIconRef.current.classList.contains("burgerIconActive")) {
			burgerIconRef.current.classList.remove("burgerIconActive");
		} else {
			burgerIconRef.current.classList.add("burgerIconActive");
		}
	}

	function toggleMobileDropdown(dropdown, value) {
		setMobileDrop1(false);
		setMobileDrop2(false);
		setMobileDrop3(false);
		setMobileDrop4(false);
		dropdown(!value);
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<nav
				ref={navRef}
				className={location.pathname === "/" ? "onTop" : ""}
				id='navigation'>
				<Link onClick={scrollToTop} id='logoWrapper' to={"/"}>
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
								<NavLink to={"/job"}>Job</NavLink>
								{/* <NavLink to={"/presse"}>Presse</NavLink> */}
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
				<div id='navMobile'>
					<svg
						ref={burgerIconRef}
						onClick={openMobileNav}
						id='burgerIcon'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 50 50'>
						<rect
							className='burgerline line-1'
							y='7'
							width='50'
							height='6'
							rx='3'
							ry='3'
						/>
						<rect
							className='burgerline line-2'
							y='22'
							width='50'
							height='6'
							rx='3'
							ry='3'
						/>
						<rect
							className='burgerline line-3'
							y='37'
							width='50'
							height='6'
							rx='3'
							ry='3'
						/>
					</svg>
					<div ref={burgerNavRef} className='burgerNav'>
						<div className='mobileMenuItem'>
							<div className='mobileMenuTop'>
								<Link to={"/kurser"} className='mobileMenuLink'>
									Kurser
								</Link>
								<img
									onClick={() =>
										toggleMobileDropdown(setMobileDrop1, mobileDrop1)
									}
									className={
										mobileDrop1
											? "mobileArrow mobileArrowRotate"
											: "mobileArrow"
									}
									src={Arrow}
									alt='Dropdown'
								/>
							</div>
							<div
								onClick={closeDropdown}
								className={
									mobileDrop1
										? "mobileMenuDropdown mobileDropActive"
										: "mobileMenuDropdown"
								}>
								<NavLink to={"/kurser/basis"}>Basiskursus</NavLink>
								<NavLink to={"/kurser/mini"}>Minikursus</NavLink>
								<NavLink to={"/kurser/familie"}>Familiekursus</NavLink>
								<NavLink to={"/kurser/teknik"}>Teknikkursus</NavLink>
								<NavLink to={"/kurser/firma"}>Firmakursus</NavLink>
								<NavLink to={"/kurser/dds"}>DDS - Forberedende Kursus</NavLink>
							</div>
						</div>
						<div className='mobileMenuItem'>
							<div className='mobileMenuTop'>
								<Link to={"/lektioner"} className='mobileMenuLink'>
									Lektioner
								</Link>
								<img
									onClick={() =>
										toggleMobileDropdown(setMobileDrop2, mobileDrop2)
									}
									className={
										mobileDrop2
											? "mobileArrow mobileArrowRotate"
											: "mobileArrow"
									}
									src={Arrow}
									alt='Dropdown'
								/>
							</div>
							<div
								onClick={closeDropdown}
								className={
									mobileDrop2
										? "mobileMenuDropdown mobileDropActive"
										: "mobileMenuDropdown"
								}>
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
						</div>
						<div className='mobileMenuItem'>
							<div className='mobileMenuTop'>
								<Link to={"/arrangementer"} className='mobileMenuLink'>
									Arrangementer
								</Link>
								<img
									onClick={() =>
										toggleMobileDropdown(setMobileDrop3, mobileDrop3)
									}
									className={
										mobileDrop3
											? "mobileArrow mobileArrowRotate"
											: "mobileArrow"
									}
									src={Arrow}
									alt='Dropdown'
								/>
							</div>
							<div
								onClick={closeDropdown}
								className={
									mobileDrop3
										? "mobileMenuDropdown mobileDropActive"
										: "mobileMenuDropdown"
								}>
								<NavLink to={"/arrangementer/firma"}>Firmaarrangement</NavLink>
								<NavLink to={"/arrangementer/polterabend"}>Polterabend</NavLink>
								<NavLink to={"/arrangementer/blaa-mandag"}>Blå Mandag</NavLink>
							</div>
						</div>
						<div className='mobileMenuItem'>
							<div className='mobileMenuTop'>
								<NavLink className='mobileMenuLink' to={"/priser"}>
									Priser
								</NavLink>
							</div>
						</div>
						<div className='mobileMenuItem'>
							<div className='mobileMenuTop'>
								<NavLink to={"/gavekort"} className='mobileMenuLink'>
									Gavekort
								</NavLink>
							</div>
						</div>
						<div className='mobileMenuItem'>
							<div className='mobileMenuTop'>
								<p className='mobileMenuLink'>Om os</p>
								<img
									onClick={() =>
										toggleMobileDropdown(setMobileDrop4, mobileDrop4)
									}
									className={
										mobileDrop4
											? "mobileArrow mobileArrowRotate"
											: "mobileArrow"
									}
									src={Arrow}
									alt='Dropdown'
								/>
							</div>
							<div
								onClick={closeDropdown}
								className={
									mobileDrop4
										? "mobileMenuDropdown mobileDropActive"
										: "mobileMenuDropdown"
								}>
								<NavLink to={"/faq"}>FAQ</NavLink>
								<NavLink to={"/kontakt"}>Kontakt</NavLink>
								<NavLink to={"/job"}>Job</NavLink>
								{/* <NavLink to={"/presse"}>Presse</NavLink> */}
								<NavLink to={"/betingelser"}>Betingelser</NavLink>
							</div>
						</div>
						<Link className='ctaButton' to={"/booking"}>
							Book nu
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
