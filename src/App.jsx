import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/Main.css";
import "./scss/Pages.css";
import "./scss/Components.css";
import "./scss/mediaQueries.css";

import PageLayout from "./layouts/PageLayout";
import CourseLayout from "./layouts/CourseLayout";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cookies from "./pages/Cookies";
import ScrollToTop from "./components/ScrollToTop";
import Prices from "./pages/Prices";
import Booking from "./pages/Booking";
import Gavekort from "./pages/Gavekort";
import BasisKursus from "./pages/kursus/BasisKursus";
import MiniKursus from "./pages/kursus/MiniKursus";
import FamilieKursus from "./pages/kursus/FamilieKursus";
import DDSKursus from "./pages/kursus/DDSKursus";
import TeknikKursus from "./pages/kursus/TeknikKursus";
import FirmaKursus from "./pages/kursus/FirmaKursus";

import EnkeltLektion from "./pages/lektioner/EnkeltLektion";
import TrePaaBaandLektion from "./pages/lektioner/TrePaaBaandLektion";
import FamilieLektion from "./pages/lektioner/FamilieLektion";
import GruppeLektion from "./pages/lektioner/GruppeLektion";
import PersonligLektion from "./pages/lektioner/PersonligLektion";
import ProeveLektion from "./pages/lektioner/ProeveLektion";
import SnowboardLektion from "./pages/lektioner/SnowboardLektion";
import SnowboardFamilieLektion from "./pages/lektioner/SnowboardFamilieLektion";

import BlaaMandag from "./pages/arrangementer/BlaaMandag";
import FirmaArrangement from "./pages/arrangementer/FirmaArrangement";
import Polterabend from "./pages/arrangementer/Polterabend";

import FAQ from "./pages/om/FAQ";
import Job from "./pages/om/Job";
import Kontakt from "./pages/om/Kontakt";
import Presse from "./pages/om/Presse";
import Betingelser from "./pages/om/Betingelser";
import Kurser from "./pages/Kurser";
import Lektioner from "./pages/Lektioner";
import Arrangementer from "./pages/Arrangementer";
import { useEffect, useState } from "react";
import PageInfo from "./components/PageInfo";
import Error from "./pages/Error";
import CookieBot from "react-cookiebot";

export default function App() {
	const [pageData, setPageData] = useState([]);

	async function getData() {
		const res = await fetch(
			"https://skiarena-admin.delu.dk/wp-json/wp/v2/posts?per_page=20&_embed"
		);
		const data = await res.json();

		let dataArray = [];
		data.forEach((post) => {
			let titleFixed = post.title.rendered.replaceAll("&#8211;", "-");
			let dataObject;
			try {
				dataObject = {
					title: titleFixed,
					image: post._embedded["wp:featuredmedia"][0].source_url,
				};
			} catch (err) {
				dataObject = {
					title: titleFixed,
					image: "",
				};
			}
			dataArray.push(dataObject);
		});

		setPageData(dataArray);
	}

	useEffect(() => {
		getData();
	}, []);
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Nav />
			<CookieBot
				domainGroupId={`${process.env.REACT_APP_COOKIEBOT_DOMAIN_GROUP_ID}`}
			/>
			<div id='mainContent'>
				<Routes>
					<Route path='*' element={<Error />} />
					<Route path='/' element={<Home />} />
					<Route path='/kurser' element={<Kurser data={pageData} />} />
					<Route path='/lektioner' element={<Lektioner data={pageData} />} />
					<Route
						path='/arrangementer'
						element={<Arrangementer data={pageData} />}
					/>
					<Route path='/cookies' element={<Cookies />} />
					<Route path='/priser' element={<Prices />} />
					<Route path='/gavekort' element={<Gavekort />} />
					<Route path='/booking' element={<Booking />} />

					<Route
						path='/kurser/basis'
						element={
							<CourseLayout
								data={pageData}
								content={<BasisKursus />}
								title={"Basiskursus"}
								info={
									<PageInfo
										priceLow='750 kr.'
										priceHigh='850 kr.'
										persons='1 person'
										duration='3 lektioner på 90 minutter'
										level='Nybegynder - Øvet'
										type='Ski'
										link={
											"basiskursus?" +
											new URLSearchParams({
												title: "Basiskursus",
											}).toString()
										}
									/>
								}
							/>
						}
					/>
					<Route
						path='/kurser/mini'
						element={
							<CourseLayout
								data={pageData}
								content={<MiniKursus />}
								title={"Minikursus"}
								info={
									<PageInfo
										priceLow={"750 kr."}
										priceHigh={"850 kr."}
										persons={"1 person"}
										duration={"3 lektioner på 90 minutter"}
										level={"Let øvet - Øvet"}
										type={"Ski"}
										link={"minikursus"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/kurser/familie'
						element={
							<CourseLayout
								data={pageData}
								content={<FamilieKursus />}
								title={"Familiekursus"}
								info={
									<PageInfo
										priceLow={"3.750 kr."}
										priceHigh={"4.250 kr."}
										persons={"op til 2 voksne og 4 børn (u. 15 år)"}
										duration={"5 lektioner på 90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"familiekursus"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/kurser/teknik'
						element={
							<CourseLayout
								data={pageData}
								content={<TeknikKursus />}
								title={"Teknikkursus"}
								info={
									<PageInfo
										priceLow={"1.795 el. 2.495 kr."}
										priceHigh={"1.795 el. 2.495 kr."}
										persons={"1 person"}
										duration={"6 el. 9 lektioner på 90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"teknikkursus"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/kurser/firma'
						element={
							<CourseLayout
								data={pageData}
								content={<FirmaKursus />}
								title={"Firmakursus"}
								info={
									<PageInfo
										priceLow={"795 kr. inkl. moms"}
										priceHigh={"795 kr. inkl. moms"}
										persons={"6 - 12 personer"}
										duration={"3 lektioner på 90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"firmakursus"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/kurser/dds'
						element={
							<CourseLayout
								data={pageData}
								content={<DDSKursus />}
								title={"DDS - Forberedende Kursus"}
								info={
									<PageInfo
										priceLow={"1.795 - 2.495 kr."}
										priceHigh={"1.795 - 2.495 kr."}
										persons={"1 person"}
										duration={"6 - 9 lektioner på 90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={
											"ddskursus?" +
											new URLSearchParams({
												title: "Den Danske Skiskole - Forberedende Kursus",
											}).toString()
										}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/enkelt'
						element={
							<CourseLayout
								data={pageData}
								content={<EnkeltLektion />}
								title={"Enkeltlektion"}
								info={
									<PageInfo
										priceLow={"375 kr."}
										priceHigh={"375 kr."}
										persons={"1 person"}
										duration={"60 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"enkeltlektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/3-paa-baandet'
						element={
							<CourseLayout
								data={pageData}
								content={<TrePaaBaandLektion />}
								title={"3 På Båndet"}
								info={
									<PageInfo
										priceLow={"750 kr."}
										priceHigh={"850 kr."}
										persons={"3 personer"}
										duration={"90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"trepaabaand"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/familie'
						element={
							<CourseLayout
								data={pageData}
								content={<FamilieLektion />}
								title={"Familielektion"}
								info={
									<PageInfo
										priceLow={"750 kr."}
										priceHigh={"850 kr."}
										persons={"op til 2 voksne og 4 børn (u. 15 år)"}
										duration={"90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"familielektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/gruppe'
						element={
							<CourseLayout
								data={pageData}
								content={<GruppeLektion />}
								title={"Gruppelektion"}
								info={
									<PageInfo
										priceLow={"Fra 1.500 kr."}
										priceHigh={"Fra 1.500 kr."}
										persons={"6 - 24 personer"}
										duration={"90 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"gruppelektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/personlig'
						element={
							<CourseLayout
								data={pageData}
								content={<PersonligLektion />}
								title={"Personlig Lektion"}
								info={
									<PageInfo
										priceLow={"750 kr."}
										priceHigh={"850 kr."}
										persons={"1 person"}
										duration={"60 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"personliglektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/proeve'
						element={
							<CourseLayout
								data={pageData}
								content={<ProeveLektion />}
								title={"Prøvelektion - 2 pers."}
								info={
									<PageInfo
										priceLow={"750 kr."}
										priceHigh={"850 kr."}
										persons={"2 personer"}
										duration={"90 minutter"}
										level={"Nybegynder"}
										type={"Ski"}
										link={"proevelektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/snowboard'
						element={
							<CourseLayout
								data={pageData}
								content={<SnowboardLektion />}
								title={"Snowboardlektion"}
								info={
									<PageInfo
										priceLow={"350 kr."}
										priceHigh={"350 kr."}
										persons={"1 person"}
										duration={"60 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Snowboard"}
										link={"snowboardlektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/lektioner/snowboard-familie'
						element={
							<CourseLayout
								data={pageData}
								content={<SnowboardFamilieLektion />}
								title={"Snowboard - Familielektion"}
								info={
									<PageInfo
										priceLow={"750 kr."}
										priceHigh={"850 kr."}
										persons={"op til 4 person"}
										duration={"60 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Snowboard"}
										link={"snowboardfamilielektion"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/arrangementer/blaa-mandag'
						element={
							<CourseLayout
								data={pageData}
								content={<BlaaMandag />}
								title={"Blå Mandag"}
								info={
									<PageInfo
										priceLow={"200 kr."}
										priceHigh={"200 kr."}
										persons={"1 person (Min. 6)"}
										duration={"60 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"blaamandag"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/arrangementer/firma'
						element={
							<CourseLayout
								data={pageData}
								content={<FirmaArrangement />}
								title={"Firmaarrangement"}
								info={
									<PageInfo
										priceLow={"1500-4000 kr."}
										priceHigh={"1500-4000 kr."}
										persons={"6-24 personer"}
										duration={"60-120 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"firmaarrangement"}
									/>
								}
							/>
						}
					/>
					<Route
						path='/arrangementer/polterabend'
						element={
							<CourseLayout
								data={pageData}
								content={<Polterabend />}
								title={"Polterabend"}
								info={
									<PageInfo
										priceLow={"650 kr."}
										priceHigh={"650 kr."}
										persons={"1 person"}
										duration={"30 minutter"}
										level={"Nybegynder - Øvet"}
										type={"Ski"}
										link={"polterabend"}
									/>
								}
							/>
						}
					/>

					<Route
						path='/faq'
						element={<PageLayout content={<FAQ />} title={"FAQ"} />}
					/>
					<Route
						path='/job'
						element={<PageLayout content={<Job />} title={"Job"} />}
					/>
					<Route
						path='/kontakt'
						element={
							<PageLayout
								content={<Kontakt />}
								title={"Kontakt"}
								wrapId={"contactPage"}
							/>
						}
					/>
					<Route
						path='/presse'
						element={<PageLayout content={<Presse />} title={"Presse"} />}
					/>
					<Route
						path='/betingelser'
						element={
							<PageLayout
								content={<Betingelser />}
								title={"Betingelser for booking"}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
